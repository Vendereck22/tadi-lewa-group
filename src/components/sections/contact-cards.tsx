import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { IconCircle } from "@/components/shared/icon-circle";
import { InlineLink } from "@/components/shared/inline-link";
import { Card } from "@/components/ui/card";
import { contactInfo, telHref } from "@/lib/data/site";

type Item = { icon: LucideIcon; title: string; content: React.ReactNode };

// Cartes de coordonnées : adresse, téléphone, email, horaires
export function ContactCards() {
  const t = useTranslations("contactInfo");
  const tp = useTranslations("contactPage");
  const addressLines = t.raw("addressLines") as string[];
  const hoursLines = t.raw("hoursLines") as string[];

  const items: Item[] = [
    {
      icon: MapPin,
      title: t("address"),
      content: (
        <address className="not-italic">
          {addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      ),
    },
    {
      icon: Phone,
      title: t("phone"),
      content: contactInfo.phones.map((phone) => (
        <InlineLink key={phone} href={telHref(phone)} className="flex whitespace-nowrap">
          {phone}
        </InlineLink>
      )),
    },
    {
      icon: Mail,
      title: t("email"),
      content: (
        <InlineLink href={`mailto:${contactInfo.email}`} className="break-all">
          {contactInfo.email}
        </InlineLink>
      ),
    },
    {
      icon: Clock,
      title: t("openingHours"),
      content: hoursLines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      )),
    },
  ];

  return (
    <section aria-label={tp("cardsLabel")} className="container-site pt-12 md:pt-16">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.title}>
            <Card className="h-full gap-0 rounded-3xl p-6 shadow-none md:p-7">
              <IconCircle icon={item.icon} />
              <h2 className="mt-5 text-lg font-bold">{item.title}</h2>
              <div className="mt-2 text-[15px] text-muted-foreground">{item.content}</div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
