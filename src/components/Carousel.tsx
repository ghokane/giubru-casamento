import React, { useEffect, useMemo, useRef, useState } from "react";
import giuBruOverlay from "../assets/white.svg";

type Props = {
  images: string[];
  intervalMs?: number;
};

export default function Carousel({ images, intervalMs = 3500 }: Props) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [idx, setIdx] = useState(0);

  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const next = () => {
    setIdx((i) => (i + 1) % safeImages.length);
  };

  const prev = () => {
    setIdx((i) => (i - 1 + safeImages.length) % safeImages.length);
  };

  const stop = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const start = () => {
    stop();
    if (safeImages.length <= 1) return;
    timerRef.current = window.setInterval(next, intervalMs);
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeImages.length, intervalMs]);

  if (safeImages.length === 0) {
    return <div className="h-full w-full bg-neutral-200" />;
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-neutral-200"
      onMouseEnter={stop}
      onMouseLeave={start}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0]?.clientX ?? null;
        stop();
      }}
      onTouchEnd={(e) => {
        const startX = touchStartX.current;
        const endX = e.changedTouches[0]?.clientX ?? null;
        touchStartX.current = null;

        if (startX != null && endX != null) {
          const dx = endX - startX;
          if (Math.abs(dx) > 40) {
            if (dx < 0) next();
            else prev();
          }
        }
        start();
      }}
    >
      {/* Slides */}
      {safeImages.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt=""
          className={[
            "absolute inset-0 h-full w-full object-cover",
            "transition-opacity duration-700 ease-in-out",
            i === idx ? "opacity-100" : "opacity-0",
          ].join(" ")}
          draggable={false}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/0" />

      {/* svg overlay */}
      <img
        src={giuBruOverlay}
        alt="Giu & Bru"
        className="
          pointer-events-none
          absolute
          bottom-5
          lg:bottom-[5em]
          left-5
          lg:left-[7em]
          z-20
          w-[70%]
          max-w-[300px]
          drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]
          select-none
        "
        draggable={false}
      />
    </div>
  );
}
