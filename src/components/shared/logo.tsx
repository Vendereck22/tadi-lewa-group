import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = {
  /** "inverse" : sur fond bleu nuit (pied de page), icône dans une tuile blanche */
  variant?: "default" | "inverse";
  className?: string;
};

// Logo provisoire (icône découpée dans la maquette) : à remplacer par le SVG officiel
export function Logo({ variant = "default", className }: Props) {
  const t = useTranslations("logo");
  const inverse = variant === "inverse";

  return (
    <Link
      href="/"
      aria-label={t("home")}
      className={cn("flex shrink-0 items-center gap-3", inverse && "text-white", className)}
    >
      {inverse ? (
        <span className="flex size-12 items-center justify-center rounded-[10px] bg-white p-1.5">
          <Image src="/images/logo-mark.png" alt="" width={300} height={217} className="h-auto w-full" />
        </span>
      ) : (
        <>
          {/* Le PNG a un fond blanc : en mode nuit, il est posé sur une tuile blanche arrondie */}
          <span className="flex items-center dark:rounded-lg dark:bg-white dark:p-1">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={300}
              height={217}
              preload
              className="h-10 w-auto md:h-11 dark:h-9 dark:md:h-10"
            />
          </span>
          <span aria-hidden="true" className="h-9 w-0.5 rounded-full bg-primary" />
        </>
      )}
      <span className="font-heading leading-none">
        <span className="block text-lg font-extrabold tracking-tight md:text-xl">TADI LEWA</span>
        <span className="mt-0.5 block text-[13px] font-bold tracking-[0.06em] md:text-sm">
          GROUP SARLU
        </span>
      </span>
    </Link>
  );
}
