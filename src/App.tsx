import React, { useMemo, useRef, useState } from "react";
import Carousel from "./components/Carousel";
import Drawer from "./components/Drawer";
import { pages } from "./pages";
import pic1 from "./assets/photos/pic1.jpg";
import pic2 from "./assets/photos/pic2.jpg";
import pic3 from "./assets/photos/pic3.jpg";
import pic4 from "./assets/photos/pic4.jpg";
// import pic5 from "./assets/photos/pic5.jpg";

const images = [pic1, pic2, pic3, pic4];

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
            <Section id="rsvp" title="RSVP">
              <p>
                Add your RSVP form here. If you want it to feel “Joy-like”, keep
                it minimal and use a single primary button.
              </p>
              <div className="mt-6">
                <button className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800">
                  RSVP
                </button>
              </div>
            </Section>

            <Section id="schedule" title="Schedule">
              <ul className="space-y-3">
                <li>
                  <span className="font-medium">4:30 PM</span> — Guests arrive
                </li>
                <li>
                  <span className="font-medium">5:00 PM</span> — Ceremony
                </li>
                <li>
                  <span className="font-medium">6:00 PM</span> — Cocktail hour
                </li>
                <li>
                  <span className="font-medium">7:00 PM</span> — Dinner &amp;
                  dancing
                </li>
              </ul>
            </Section>

            <Section id="accommodations" title="Accommodations">
              <div className="space-y-6">
                {[
                  {
                    name: "Hotel One",
                    distance: "8 min drive",
                    address: "123 Main St, City",
                    url: "#",
                  },
                  {
                    name: "Hotel Two",
                    distance: "12 min drive",
                    address: "456 Oak Ave, City",
                    url: "#",
                  },
                ].map((h) => (
                  <div
                    key={h.name}
                    className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-lg font-semibold text-neutral-900">
                          {h.name}
                        </div>
                        <div className="mt-1 text-sm text-neutral-600">
                          {h.distance}
                        </div>
                        <div className="mt-2 text-sm text-neutral-700">
                          {h.address}
                        </div>
                      </div>
                      <a
                        href={h.url}
                        className="shrink-0 rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
                      >
                        Book
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="faq" title="FAQ">
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-neutral-900">
                    What should I wear?
                  </div>
                  <div className="text-neutral-700">
                    Cocktail attire. Bring a light layer for the evening.
                  </div>
                </div>
                <div>
                  <div className="font-medium text-neutral-900">
                    Can I bring a plus one?
                  </div>
                  <div className="text-neutral-700">
                    If your invite says so, yes 🙂
                  </div>
                </div>
              </div>
            </Section>

            <div className="py-10 text-sm text-neutral-500">
              © {new Date().getFullYear()} — Your Wedding Site
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
