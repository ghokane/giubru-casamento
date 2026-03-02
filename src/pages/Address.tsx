import React from "react";

export default function AddressPage() {
  return (
    <section id="address" className="scroll-mt-10 py-0">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        Endereço
      </h2>

      <div className="mt-4 space-y-4 text-neutral-700">
        <div>
          <div className="font-medium text-neutral-900">Fazenda Capela do Bosque</div>
          <div>Estrada da Glória, 1000</div>
          <div>Porto Feliz – São Paulo, SP</div>
          <div>18540-000</div>
        </div>

        <div className="flex gap-4">
          <a
            href="https://maps.app.goo.gl/Zxybh88JdEhf2Hsh9"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Abrir no Google Maps
          </a>

          <a
            href="https://waze.com/ul?ll=-23.235372,-47.4631996&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-100"
          >
            Abrir no Waze
          </a>
        </div>

        {/* Google Maps embed */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200">
          <iframe
            title="Mapa - Fazenda Capela do Bosque"
            src="https://www.google.com/maps?q=-23.235372,-47.463200&z=15&output=embed"
            className="h-64 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}