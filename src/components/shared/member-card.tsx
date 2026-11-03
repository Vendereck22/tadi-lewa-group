"use client";

import { Mail, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { LinkedinIcon } from "@/components/shared/brand-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { TeamMember } from "@/lib/data/team";
import { cn } from "@/lib/utils";

// Portrait du membre, ou silhouette tant que la photo n'est pas fournie
function MemberAvatar({ member, className }: { member: TeamMember; className?: string }) {
  const t = useTranslations("about.founder");
  const name = useTranslations("team.members")(`${member.id}.name`);

  return (
    <Avatar className={cn("bg-accent", className)}>
      {member.photo && (
        <AvatarImage
          src={member.photo}
          alt={t("portrait", { name })}
          className="object-cover object-top"
        />
      )}
      <AvatarFallback className="flex-col gap-2 rounded-none bg-accent text-sm">
        <UserRound aria-hidden="true" className="size-1/4 max-w-12 text-chart-4" strokeWidth={1.5} />
      </AvatarFallback>
    </Avatar>
  );
}

function MemberLinks({ member }: { member: TeamMember }) {
  const t = useTranslations("about.members");
  const tc = useTranslations("common");
  const name = useTranslations("team.members")(`${member.id}.name`);
  const links = [
    { label: "LinkedIn", href: member.linkedin, icon: <LinkedinIcon />, external: true },
    { label: "Email", href: `mailto:${member.email}`, icon: <Mail />, external: false },
  ];

  return (
    <ul className="flex gap-2">
      {links.map((link) => (
        <li key={link.label}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild variant="outline" size="icon" className="size-11 text-primary">
                <a
                  href={link.href}
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  aria-label={`${t("linkLabel", { network: link.label, name })}${link.external ? ` ${tc("newTab")}` : ""}`}
                >
                  {link.icon}
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{link.label}</TooltipContent>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
}

// Carte d'un membre : photo, pôle, nom, fonction, liens, fiche détaillée en Dialog
export function MemberCard({ member }: { member: TeamMember }) {
  const t = useTranslations("about.members");
  const tm = useTranslations("team.members");
  const pole = useTranslations("team.poles")(member.pole);
  const name = tm(`${member.id}.name`);
  const role = tm(`${member.id}.role`);
  const bio = tm(`${member.id}.bio`);

  return (
    <Dialog>
      <Card className="h-full gap-0 overflow-hidden rounded-none py-0 shadow-none">
        <MemberAvatar member={member} className="aspect-[4/4.2] size-auto w-full rounded-none" />

        <div className="flex flex-1 flex-col p-6">
          <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-semibold">
            {pole}
          </Badge>
          <h3 className="mt-3 text-lg font-bold">{name}</h3>
          <p className="mt-1 text-sm font-semibold text-brand">{role}</p>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{bio}</p>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <MemberLinks member={member} />
            <DialogTrigger asChild>
              <Button variant="link" className="h-auto p-0 font-semibold text-brand">
                {t("viewProfile")}
              </Button>
            </DialogTrigger>
          </div>
        </div>
      </Card>

      <DialogContent className="overflow-hidden rounded-none p-0 sm:max-w-md">
        <MemberAvatar member={member} className="aspect-[16/10] size-auto w-full rounded-none" />
        <div className="px-6 pb-6">
          <DialogHeader className="text-left">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-semibold">
              {pole}
            </Badge>
            <DialogTitle className="mt-1 font-heading text-xl font-bold">{name}</DialogTitle>
            <DialogDescription className="font-semibold text-brand">{role}</DialogDescription>
          </DialogHeader>
          <p className="mt-4 text-muted-foreground">{bio}</p>
          <div className="mt-6">
            <MemberLinks member={member} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
