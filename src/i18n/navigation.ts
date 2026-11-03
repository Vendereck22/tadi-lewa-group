import { createNavigation } from "next-intl/navigation";
import { routing } from "@/i18n/routing";

// Liens et navigation qui conservent la langue courante
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
