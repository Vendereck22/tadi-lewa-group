"use client";

import Link from "next/link";
import { ChevronRight, MapPin, Menu } from "lucide-react";
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
import { cn } from "@/lib/utils";
import { isActivePath, navLinks } from "@/lib/data/site";

// Menu hamburger affiché sous 1024 px
export function MobileNav({ pathname }: { pathname: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Ouvrir le menu" className="size-11 lg:hidden">
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
          <SheetDescription className="sr-only">Menu de navigation du site</SheetDescription>
        </SheetHeader>

        <nav aria-label="Navigation mobile" className="flex flex-col gap-1 px-4 py-5">
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
                  {link.label}
                  <ChevronRight aria-hidden="true" className="size-4 opacity-60" />
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <Separator />

        <div className="px-6 py-6">
          <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <MapPin aria-hidden="true" className="size-4" />
            Kinshasa, RDC
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
