import { Clock, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { InlineLink } from "@/components/shared/inline-link";
import { contactInfo, telHref } from "@/lib/data/site";

// Barre d'infos bleu nuit au-dessus de l'en-tête (adresse, horaires, téléphone)
export function TopBar() {
  const t = useTranslations("contactInfo");
  const phone = contactInfo.phones[0];

  return (
    <div className="bg-brand-deep text-xs text-brand-deep-foreground sm:text-[13px]">
      <div className="container-site flex h-10 items-center justify-between gap-4 sm:gap-6">
        <ul className="flex min-w-0 items-center gap-6">
          <li className="hidden min-w-0 items-center gap-2 md:flex">
            <MapPin aria-hidden="true" className="size-3.5 shrink-0" />
            <span className="truncate">{t("shortAddress")}</span>
          </li>
          <li className="flex items-center gap-2 whitespace-nowrap">
            <Clock aria-hidden="true" className="size-3.5 shrink-0" />
            {t("shortHours")}
          </li>
        </ul>
        <InlineLink
          href={telHref(phone)}
          className="gap-2 whitespace-nowrap hover:text-white [&_svg:not([class*='size-'])]:size-3.5"
        >
          <Phone aria-hidden="true" />
          {phone}
        </InlineLink>
      </div>
    </div>
  );
}
