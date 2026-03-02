import React, { useState, useEffect } from "react";

export default function Gallery({ images }: { images: string[] }) {
  const [current, setCurrent] = useState<number | null>(null);

  // lock scroll when lightbox is open + keyboard navigation
  useEffect(() => {
    document.body.style.overflow = current !== null ? "hidden" : "";

    const onKey = (e: KeyboardEvent) => {
      if (current === null) return;
      if (e.key === "Escape") {
        setCurrent(null);
      } else if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [current]);

  const prev = () => {
    setCurrent((c) =>
      c === null ? null : (c - 1 + images.length) % images.length
    );
  };

  const next = () => {
    setCurrent((c) => (c === null ? null : (c + 1) % images.length));
  };

  return (
    <>
      <div className="flex overflow-x-auto gap-4 py-6">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className="flex-shrink-0"
          >
            <img
              src={img}
              className="h-48 w-auto rounded-lg shadow-sm cursor-pointer"
              alt={`Gallery ${i + 1}`}
            />
          </button>
        ))}
      </div>

      {current !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
          onClick={() => setCurrent(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(null);
            }}
            aria-label="Close"
          >
            X
          </button>

          <button
            className="absolute left-4 text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            &lt;
          </button>

          <img
            src={images[current]}
            className="max-w-[90%] max-h-[90%]"
            alt={`Gallery ${current + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            {'>'}
          </button>
        </div>
      )}
    </>
  );
}
