"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export type ViewerPhoto = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

type Props = {
  photos: ViewerPhoto[];
  /** Photo affichée, `null` quand la visionneuse est fermée */
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

const navClass = "rounded-full text-white hover:bg-white/15 hover:text-white";

// Visionneuse plein écran des galeries : flèches, touches ← → et Échap
export function PhotoViewer({ photos, index, onIndexChange, onClose }: Props) {
  const t = useTranslations("viewer");
  const count = photos.length;
  const photo = index === null ? null : photos[index];

  function go(step: number) {
    if (index !== null) onIndexChange((index + step + count) % count);
  }

  return (
    <Dialog open={photo !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") go(1);
          if (event.key === "ArrowLeft") go(-1);
        }}
        className="max-w-[calc(100%-2rem)] gap-0 overflow-hidden rounded-none border-0 bg-black p-0 text-white sm:max-w-5xl"
      >
        {photo && index !== null && (
          <>
            {/* Hauteur plafonnée pour garder la légende visible sur les écrans bas */}
            <div className="relative aspect-[3/2] max-h-[72vh] w-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-6">
              <div className="min-w-0">
                <DialogTitle className="font-heading text-lg font-bold">{photo.title}</DialogTitle>
                <DialogDescription className="mt-0.5 text-sm text-white/70">
                  {photo.subtitle} · {index + 1} / {count}
                </DialogDescription>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button variant="ghost" size="icon" className={navClass} onClick={() => go(-1)}>
                  <ChevronLeft />
                  <span className="sr-only">{t("previous")}</span>
                </Button>
                <Button variant="ghost" size="icon" className={navClass} onClick={() => go(1)}>
                  <ChevronRight />
                  <span className="sr-only">{t("next")}</span>
                </Button>
              </div>
            </div>
            <DialogClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white"
              >
                <X />
                <span className="sr-only">{t("close")}</span>
              </Button>
            </DialogClose>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
