import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

type Props = {
  /** Libellé de la page courante dans le fil d'Ariane */
  crumb: string;
  title: React.ReactNode;
  description: string;
  image?: { src: string; alt: string };
  /** Contenu sous le sous-titre (pilules d'ancres de la page Services…) */
  children?: React.ReactNode;
};

// Bandeau bg-muted en haut des pages intérieures : fil d'Ariane, H1, sous-titre, photo.
// Sans image, le contenu est centré (page Actualités).
export function PageHeader({ crumb, title, description, image, children }: Props) {
  return (
    <section className="border-b bg-muted">
      <div
        className={cn(
          "container-site py-12 md:py-20",
          image ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-16" : "text-center",
        )}
      >
        <div className={cn(!image && "mx-auto max-w-3xl")}>
          <Breadcrumb>
            <BreadcrumbList className={cn("gap-1.5 sm:gap-1.5", !image && "justify-center")}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">{crumb}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="mt-4 text-4xl leading-[1.08] font-extrabold md:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{description}</p>
          {children}
        </div>

        {image && (
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
