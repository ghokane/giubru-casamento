import React from "react";

export default function RsvpPage() {
  return (
    <section id="rsvp" className="scroll-mt-10 py-">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        RSVP
      </h2>

      <div className="mt-4 text-neutral-700">
        Confirme sua presença com a nossa assessoria pelo WhatsApp 
      </div>

      <div className="mt-6">
        <a
          href="https://wa.me/5511944527981"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Clique para RSVP via WhatsApp
        </a>

        <div className="mt-4 text-neutral-700">
          +55 (11) 94452-7981
        </div>
      </div>
    </section>
  );
}