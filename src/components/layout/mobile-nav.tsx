"use client";

import { ChevronRight, MapPin, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import { isActivePath, navLinks } from "@/lib/data/site";
import { cn } from "@/lib/utils";

// Menu hamburger affiché sous 1024 px
export function MobileNav({ pathname }: { pathname: string }) {
  const t = useTranslations("nav");
  const tc = useTranslations("common");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label={t("openMenu")} className="size-11 lg:hidden">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[85vw] max-w-sm gap-0 p-0">
        <SheetHeader className="border-b px-6 py-5">
          <SheetTitle asChild>
            <div>
              <Logo />
            </div>
          </SheetTitle>
          <SheetDescription className="sr-only">{t("menuDescription")}</SheetDescription>
        </SheetHeader>

        <nav aria-label={t("mobile")} className="flex flex-col gap-1 px-4 py-5">
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-12 items-center justify-between rounded-full px-5 text-base font-medium transition-colors",
                    active ? "bg-primary text-primary-foreground" : "hover:bg-accent",
                  )}
                >
                  {t(link.key)}
                  <ChevronRight aria-hidden="true" className="size-4 opacity-60" />
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <Separator />

        <div className="flex flex-col items-center gap-5 px-6 py-6">
          {/* Déjà dans la barre du haut à partir de 640 px */}
          <div className="flex items-center gap-3 sm:hidden">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
          <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <MapPin aria-hidden="true" className="size-4" />
            {tc("kinshasa")}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
