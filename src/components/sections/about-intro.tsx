import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/data/images";

export function AboutIntro() {
  return (
    <section className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
      {/* Composition : grande photo de l'équipe au travail, seconde photo en avant-plan */}
      <div className="relative mx-auto aspect-[295/237] w-full max-w-[560px]">
        <div className="absolute inset-y-0 left-0 w-[70%] overflow-hidden">
          <Image
            src={photos.aboutMain.src}
            alt={photos.aboutMain.alt}
            fill
            sizes="(min-width: 1024px) 400px, 70vw"
            className="object-cover"
          />
        </div>
        <div className="absolute top-[43.5%] right-0 h-[49%] w-[57.6%] overflow-hidden shadow-[0_14px_40px_rgba(10,42,102,0.08)]">
          <Image
            src={photos.aboutSecondary.src}
            alt={photos.aboutSecondary.alt}
            fill
            sizes="(min-width: 1024px) 330px, 58vw"
            className="object-cover"
          />
        </div>
      </div>

      <div>
        <SectionHeader
          eyebrow="Qui sommes-nous"
          title="Un groupe congolais au service de l'entrepreneuriat"
        />
        <div className="mt-5 space-y-4 text-muted-foreground">
          <p>
            TADI LEWA GROUP SARLU est une société basée à Kinshasa, dans la commune de Ngaliema.
            Nous accompagnons les porteurs de projets, les jeunes entrepreneurs et les entreprises
            qui veulent grandir, en leur apportant conseil, formation, visibilité et opportunités
            de partenariat.
          </p>
          <p>
            À travers nos événements, comme la foire entrepreneuriale MADE IN CONGO, nous créons
            des espaces de rencontre entre entrepreneurs, experts et partenaires pour faire émerger
            des projets à fort impact.
          </p>
          <p>[Ajoutez ici l&apos;année de création, le nom du fondateur et l&apos;histoire de l&apos;entreprise.]</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="xl">
            <Link href="/services">
              Nos services
              <ArrowRight />
            </Link>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="border-[1.5px] border-primary bg-transparent text-primary shadow-none"
          >
            <Link href="/contact">Nous écrire</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
