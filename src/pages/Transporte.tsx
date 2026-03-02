import React from "react";

type transporte = {
  name: string;
  distance: string;
  address: string;
  url: string;
};

const transportes: transporte[] = [
  {
    name: "Batistella Vans",
    distance: "Contato: Marta",
    address: "+55 (11) 97089-2646",
    url: "https://wa.me/5511970892646",
  },
  {
    name: "Peritur",
    distance: "Contato: Marco",
    address: "+55 (11) 94132-8768",
    url: "https://wa.me/5511941328768",
  },
];

export default function TransportePage() {
  return (
    <section id="transporte" className="scroll-mt-10 py-0">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        Sugestões de Transporte
      </h2>


      <div className="mt-6 space-y-6">
        {transportes.map((h) => (
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
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Abrir no WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}