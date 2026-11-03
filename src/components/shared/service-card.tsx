import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { IconCircle } from "@/components/shared/icon-circle";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { Service } from "@/lib/data/services";

// Carte de service : pastille d'icône, titre, description, lien
export function ServiceCard({ service }: { service: Service }) {
  const t = useTranslations("services");
  const tc = useTranslations("common");
  const title = t(`${service.id}.title`);

  return (
    <Card className="gap-0 rounded-3xl p-7 shadow-card transition-shadow hover:shadow-[0_14px_40px_rgba(10,42,102,0.08)] md:p-8">
      <CardHeader className="gap-0 px-0">
        <IconCircle icon={service.icon} size="lg" />
        <CardTitle className="mt-6 leading-snug">
          <h3 className="text-lg font-bold md:text-xl">{title}</h3>
        </CardTitle>
        <CardDescription className="mt-4 text-base">{t(`${service.id}.summary`)}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto px-0 pt-6">
        <Button asChild variant="link" className="h-auto p-0 text-base font-semibold text-brand has-[>svg]:px-0">
          <Link href={`/services#${service.id}`}>
            {tc("learnMore")}
            <span className="sr-only"> : {title}</span>
            <ArrowRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
