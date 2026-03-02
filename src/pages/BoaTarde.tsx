import React, { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-05-30T15:00:00"); // ⬅️ CHANGE DATE & TIME

function getTimeLeft() {
  const now = new Date().getTime();
  const diff = EVENT_DATE.getTime() - now;

  if (diff <= 0) {
    return null;
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function SchedulePage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="schedule" className="scroll-mt-10 py-0">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        Nosso grande dia está chegando!
      </h2>

      <div className="mt-4 text-neutral-700">
        <ul className="space-y-2">
          <li>
             Estamos muito felizes e animados para comemorar com você no dia 30 de Maio de 2026!
          </li>
        </ul>
      </div>


      <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        {timeLeft ? (
          <div className="grid grid-cols-4 gap-4 text-center">
            <CountdownItem label="Dias" value={timeLeft.days} />
            <CountdownItem label="Horas" value={timeLeft.hours} />
            <CountdownItem label="Min" value={timeLeft.minutes} />
            <CountdownItem label="Seg" value={timeLeft.seconds} />
          </div>
        ) : (
          <div className="text-center text-lg font-semibold text-neutral-900">
            🎉 O grande dia chegou! Você está atrasado!!!
          </div>
        )}
      </div>
    </section>
  );
}

function CountdownItem({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>
      <div className="text-3xl font-bold tabular-nums text-neutral-900">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wide text-neutral-500">
        {label}
      </div>
    </div>
  );
}