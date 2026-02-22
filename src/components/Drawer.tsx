import React, { useEffect } from "react";
import blackSvg from "../assets/black.svg";

type Props = {
  open: boolean;
  onClose: () => void;
  pages: { id: string; label: string }[];
  onNavigate: (id: string) => void;
};

export default function Drawer({ open, onClose, pages, onNavigate }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <div
      className={[
        "fixed inset-0 z-50",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        className={[
          "absolute inset-0 h-full w-full bg-black/40 backdrop-blur-[2px] transition-opacity",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
      />

      {/* Panel */}
      <aside
        className={[
          "absolute left-0 top-0 h-full",
          "w-[85vw] max-w-[380px]",
          "lg:w-[320px] lg:max-w-none",
          "bg-[#FAF9F7] shadow-2xl",
          "transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
          <img
            src={blackSvg}
            alt="Menu"
            className="h-[4em] w-auto select-none pointer-events-none"
            draggable={false}
          />

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-neutral-100"
            aria-label="Close"
          >
            <span className="text-xl leading-none">x</span>
          </button>
        </div>

        {/* Nav */}
        <nav className="px-3 py-3">
          <div className="flex flex-col gap-1">
            {pages.map((page) => (
              <button
                key={page.id}
                type="button"
                onClick={() => {
                  onClose();
                  setTimeout(() => onNavigate(page.id), 0);
                }}
                className="w-full rounded-xl px-4 py-3 text-left text-base font-medium text-neutral-900 hover:bg-neutral-100"
              >
                {page.label}
              </button>
            ))}
          </div>
        </nav>
      </aside>
    </div>
  );
}
