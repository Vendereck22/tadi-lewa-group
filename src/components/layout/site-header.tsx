"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { Logo } from "@/components/shared/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, usePathname } from "@/i18n/navigation";
import { isActivePath, navLinks } from "@/lib/data/site";
import { cn } from "@/lib/utils";

/** Défilement (px) à partir duquel l'en-tête quitte la couleur du hero */
const SCROLL_THRESHOLD = 16;

export function SiteHeader() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sur l'accueil, tant qu'on n'a pas défilé, l'en-tête prend le bleu nuit du hero ;
  // les enfants s'adaptent via les variantes group-data-[overlay=true]/header
  const overlay = isHome && !scrolled;

  return (
    <header
      data-overlay={overlay}
      className={cn(
        "group/header sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        overlay
          ? "border-white/10 bg-brand-deep"
          : "bg-background/95 shadow-[0_6px_24px_rgb(10_42_102/0.06)] backdrop-blur supports-[backdrop-filter]:bg-background/85",
      )}
    >
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Logo />

        <div className="flex items-center gap-2 lg:gap-4">
          {/* Liens alignés à droite (le bouton « Prendre rendez-vous » reste dans les bandeaux) */}
          <NavigationMenu viewport={false} aria-label={t("main")} className="hidden flex-none lg:flex">
            <NavigationMenuList className="gap-1">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    asChild
                    active={isActivePath(pathname, link.href)}
                    className="h-10 flex-row items-center rounded-full px-4 py-0 text-[15px] font-medium whitespace-nowrap text-foreground transition-colors data-active:bg-primary data-active:text-primary-foreground data-active:hover:bg-primary data-active:focus:bg-primary group-data-[overlay=true]/header:text-white/85 group-data-[overlay=true]/header:hover:bg-white/10 group-data-[overlay=true]/header:hover:text-white group-data-[overlay=true]/header:focus:bg-white/10 group-data-[overlay=true]/header:focus:text-white group-data-[overlay=true]/header:data-active:bg-white group-data-[overlay=true]/header:data-active:text-brand-deep group-data-[overlay=true]/header:data-active:hover:bg-white"
                  >
                    <Link href={link.href}>{t(link.key)}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Langue et thème : dans la barre dès 640 px, dans le menu mobile en dessous */}
          <div className="hidden items-center gap-2 sm:flex">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
          <MobileNav pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
