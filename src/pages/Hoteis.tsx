import React from "react";

type Hotel = {
  name: string;
  distance: string;
  address: string;
  url: string;
};

const hotels: Hotel[] = [
  {
    name: "Porto Feliz Executive",
    distance: "9 min drive",
    address: "Rod. Mal. Rondon, s/n - km 132 - Bambu, Porto Feliz - SP, 18540-000, Brasil",
    url: "https://maps.app.goo.gl/71UqWzyLZFMu6bdJA",
  },
  {
    name: "Ibis Itu Plaza Shopping",
    distance: "25 min drive",
    address: "Inside Itu, Shopping Plaza - Av. Wolko Orni Yedlin, 1251 - Jardim Paraiso II, Itu - SP, 13304-360, Brasil",
    url: "https://maps.app.goo.gl/oWTLAS5aEeNLTWa4A",
  },
    {
    name: "Gandini Hotel",
    distance: "25 min drive",
    address: "R. Argemiro da Silveira D'elboux, 120 - Alto da Vila Nova, Itu - SP, 13309-330, Brasil",
    url: "https://maps.app.goo.gl/QbiRxEKsyu4gpmNB7",
  },
];

export default function HoteisPage() {
  return (
    <section id="hoteis" className="scroll-mt-10 py-0">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        Sugestões de Hospedagem
      </h2>


      <div className="mt-6 space-y-6">
        {hotels.map((h) => (
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
                Abrir no Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}