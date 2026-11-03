"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Logo } from "@/components/shared/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { isActivePath, navLinks } from "@/lib/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Logo />

        {/* Liens alignés à droite (le bouton « Prendre rendez-vous » reste dans le menu mobile) */}
        <NavigationMenu
          viewport={false}
          aria-label="Navigation principale"
          className="hidden flex-none justify-end lg:flex"
        >
          <NavigationMenuList className="gap-1">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  asChild
                  active={isActivePath(pathname, link.href)}
                  className="h-10 flex-row items-center rounded-full px-4 py-0 text-[15px] font-medium whitespace-nowrap text-foreground data-active:bg-primary data-active:text-primary-foreground data-active:hover:bg-primary data-active:focus:bg-primary"
                >
                  <Link href={link.href}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <MobileNav pathname={pathname} />
      </div>
    </header>
  );
}
