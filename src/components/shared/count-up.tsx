"use client";

import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  /** Durée du comptage, en millisecondes */
  duration?: number;
  /** Attente avant de démarrer, pour décaler plusieurs compteurs */
  delay?: number;
};

// Compteur : monte de 0 à `value` chaque fois qu'il entre à l'écran, revient à 0 quand il en sort.
// Rendu serveur et mouvement réduit : la valeur finale s'affiche directement.
export function CountUp({ value, duration = 2200, delay = 0 }: Props) {
  const locale = useLocale();
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const stop = () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        // Démarre vite et ralentit en fin de course (ease-out cubique)
        setCurrent(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        stop();
        if (entry.isIntersecting) {
          timer = setTimeout(run, delay);
        } else {
          // Hors de l'écran : prêt à recompter au prochain passage
          setCurrent(0);
        }
      },
      { threshold: 0.5 },
    );

    setCurrent(0);
    observer.observe(node);
    return () => {
      observer.disconnect();
      stop();
    };
  }, [value, duration, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      {new Intl.NumberFormat(locale).format(current)}
    </span>
  );
}
