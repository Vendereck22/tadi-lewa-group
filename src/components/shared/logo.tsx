import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  /** "inverse" : sur fond bleu nuit (pied de page), icône dans une tuile blanche */
  variant?: "default" | "inverse";
  className?: string;
};

// Logo provisoire (icône découpée dans la maquette) : à remplacer par le SVG officiel
export function Logo({ variant = "default", className }: Props) {
  const inverse = variant === "inverse";

  return (
    <Link
      href="/"
      aria-label="TADI LEWA GROUP SARLU, retour à l'accueil"
      className={cn("flex shrink-0 items-center gap-3", inverse && "text-white", className)}
    >
      {inverse ? (
        <span className="flex size-12 items-center justify-center rounded-[10px] bg-white p-1.5">
          <Image src="/images/logo-mark.png" alt="" width={300} height={217} className="h-auto w-full" />
        </span>
      ) : (
        <>
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={300}
            height={217}
            preload
            className="h-10 w-auto md:h-11"
          />
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
