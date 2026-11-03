"use client";

import { useTranslations } from "next-intl";
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

export function SiteHeader() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
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
                    className="h-10 flex-row items-center rounded-full px-4 py-0 text-[15px] font-medium whitespace-nowrap text-foreground data-active:bg-primary data-active:text-primary-foreground data-active:hover:bg-primary data-active:focus:bg-primary"
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
