"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useTransition } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const HASH_KEY = "tadi-lewa-locale-hash";

// Sélecteur FR / EN : garde la page, les filtres (?categorie=…) et l'ancre (#equipe…)
export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("language");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Le routeur abandonne l'ancre (#equipe…) en changeant de langue, et ce composant est
  // recréé avec le layout [locale] : l'ancre passe donc par sessionStorage
  useEffect(() => {
    try {
      const hash = sessionStorage.getItem(HASH_KEY);
      if (!hash) return;
      sessionStorage.removeItem(HASH_KEY);
      history.replaceState(history.state, "", hash);
    } catch {}
  }, []);

  function switchTo(next: string) {
    if (!next || next === locale) return;
    const { search, hash } = window.location;
    try {
      if (hash) sessionStorage.setItem(HASH_KEY, hash);
    } catch {}
    startTransition(() => router.replace(`${pathname}${search}`, { locale: next as Locale, scroll: false }));
  }

  return (
    <ToggleGroup
      type="single"
      spacing={0.5}
      value={locale}
      onValueChange={switchTo}
      aria-label={t("label")}
      disabled={isPending}
      className={cn(
        "rounded-full border bg-card p-0.5 transition-colors group-data-[overlay=true]/header:border-white/20 group-data-[overlay=true]/header:bg-white/10",
        className,
      )}
    >
      {routing.locales.map((code) => (
        <ToggleGroupItem
          key={code}
          value={code}
          lang={code}
          aria-label={t(code)}
          className="h-8 min-w-10 rounded-full px-2.5 text-xs font-bold tracking-wide uppercase data-[state=on]:bg-primary data-[state=on]:text-primary-foreground group-data-[overlay=true]/header:text-white/85 group-data-[overlay=true]/header:hover:bg-white/10 group-data-[overlay=true]/header:hover:text-white group-data-[overlay=true]/header:data-[state=on]:bg-white group-data-[overlay=true]/header:data-[state=on]:text-brand-deep"
        >
          {code}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
