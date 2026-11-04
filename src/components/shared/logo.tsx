import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = {
  /**
   * "default" : logo horizontal (navbar, menu mobile), texte blanc en mode nuit
   * "inverse" : logo empilé à texte blanc, sur fond bleu nuit (pied de page)
   */
  variant?: "default" | "inverse";
  className?: string;
};

// Logo officiel, décliné depuis public/logo/20261103_111153 2.png :
// logo-horizontal(-white).png pour les barres, logo-white.png (empilé) pour le pied de page
export function Logo({ variant = "default", className }: Props) {
  const t = useTranslations("logo");

  return (
    <Link href="/" aria-label={t("home")} className={cn("flex shrink-0 items-center", className)}>
      {variant === "inverse" ? (
        <Image src="/logo/logo-white.png" alt="" width={900} height={620} className="h-auto w-44" />
      ) : (
        <>
          {/* Deux versions : texte blanc en mode nuit, et sur l'en-tête bleu nuit de l'accueil */}
          <Image
            src="/logo/logo-horizontal.png"
            alt=""
            width={642}
            height={192}
            preload
            className="h-12 w-auto md:h-14 dark:hidden group-data-[overlay=true]/header:hidden"
          />
          <Image
            src="/logo/logo-horizontal-white.png"
            alt=""
            width={642}
            height={192}
            // Visible dès l'arrivée sur l'accueil (en-tête bleu nuit) : pas de chargement différé
            loading="eager"
            className="hidden h-12 w-auto md:h-14 dark:block group-data-[overlay=true]/header:block"
          />
        </>
      )}
    </Link>
  );
}
