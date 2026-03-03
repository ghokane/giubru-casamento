import React, { useMemo, useRef, useState } from "react";
import Carousel from "./components/Carousel";
import Drawer from "./components/Drawer";
import Gallery from "./components/Gallery";
import { pages } from "./pages";
import pic1 from "./assets/photos/pic1.jpg";
import pic2 from "./assets/photos/pic2.jpg";
import pic3 from "./assets/photos/pic3.jpg";
import pic4 from "./assets/photos/pic4.jpg";
// import pic5 from "./assets/photos/pic5.jpg";

import g1 from "./assets/photos/g1.jpg";
import g2 from "./assets/photos/g2.jpg";
import g3 from "./assets/photos/g3.jpg";
import g4 from "./assets/photos/g4.jpg";
import g5 from "./assets/photos/g5.jpg";
import g6 from "./assets/photos/g6.jpg";
import g7 from "./assets/photos/g7.jpg";
import g8 from "./assets/photos/g8.jpg";
import g9 from "./assets/photos/g9.jpg";
import g10 from "./assets/photos/g10.jpg";
import g11 from "./assets/photos/g11.jpg";
import g12 from "./assets/photos/g12.jpg";
import g13 from "./assets/photos/g13.jpg";
import g14 from "./assets/photos/g14.jpg";


const images = [pic1, pic2, pic3, pic4];
const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12,g13,g14];


function Section({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-10 py-12">
     {( title && <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        {title}
      </h2>)}
      <div className="mt-4 text-neutral-700 leading-relaxed">{children}</div>
      <div className="mt-10 h-px w-full bg-neutral-200" />
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Reference to the right scroll container (important on desktop)
  const rightScrollRef = useRef<HTMLDivElement | null>(null);


  const menuItems = useMemo(
    () => [
      { label: "RSVP", href: "#rsvp" },
      { label: "Schedule", href: "#schedule" },
      { label: "Accommodations", href: "#accommodations" },
      { label: "FAQ", href: "#faq" },
    ],
    []
  );

  const scrollToSection = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // If desktop: scroll the right pane
    if (rightScrollRef.current && window.matchMedia("(min-width: 1024px)").matches) {
      // el.offsetTop is relative to its offsetParent; safest is using getBoundingClientRect deltas
      const container = rightScrollRef.current;
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const delta = elRect.top - containerRect.top;

      container.scrollTo({
        top: container.scrollTop + delta - 16, // small top padding
        behavior: "smooth",
      });
      return;
    }

    // Mobile: normal page scroll
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-dvh bg-white lg:h-dvh lg:overflow-hidden bg-[#FAF9F7]">
      <Drawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pages={pages}
        onNavigate={(id) => scrollToSection(`#${id}`)}
      />

      <div className="lg:flex lg:h-full">
        <div className="relative lg:w-2/3 lg:h-full">
          <div className="h-dvh lg:h-full">
            <Carousel images={images} intervalMs={3500} />
          </div>
          <button
            type="button"
            className="absolute left-4 top-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur hover:bg-white"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            {/* Hamburger icon */}
            <div className="space-y-1.5">
              <div className="h-0.5 w-5 bg-neutral-900" />
              <div className="h-0.5 w-5 bg-neutral-900" />
              <div className="h-0.5 w-5 bg-neutral-900" />
            </div>
          </button>
        </div>

        <div
          ref={rightScrollRef}
          className="lg:w-1/3 lg:h-full lg:overflow-y-auto"
        >
          <div className="mx-auto w-full max-w-xl px-6 py-10 lg:py-14 bg-[#FAF9F7]">
            {
              pages.map((page) => (
                <Section key={page.id} id={page.id} title={page.title}>
                  <page.Component />
                </Section>
              ))
            }

            <div className="lg:col-span-2 mt-8">
              <Gallery images={galleryImages} />
            </div>
        

            <div className="py-10 text-sm text-neutral-500">
              © {new Date().getFullYear()} — Giu&Bru eventos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
