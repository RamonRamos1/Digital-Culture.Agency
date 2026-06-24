"use client";

import { useState } from "react";
import clsx from "clsx";

const PROBLEMS = [
  { label: "Quiero conseguir más clientes", targetId: "marketing" },
  { label: "Quiero vender más en Mercado Libre", targetId: "mercadolibre" },
  { label: "Quiero automatizar procesos", targetId: "automatizaciones" },
  { label: "Necesito un sistema interno", targetId: "sistemas" },
  { label: "Necesito presencia digital", targetId: "web" },
];

export default function ProblemChips() {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (i: number, targetId: string) => {
    setActive(i);
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-6 md:px-12 pb-14">
      <div className="text-xs text-dc-muted tracking-wide uppercase font-semibold mb-5">
        ¿Por dónde empezar? Elegí tu objetivo
      </div>
      <div className="flex gap-2.5 flex-wrap">
        {PROBLEMS.map((p, i) => (
          <button
            key={p.label}
            onClick={() => handleClick(i, p.targetId)}
            className={clsx(
              "px-5 py-2.5 rounded-full border text-[13px] font-medium transition-all",
              active === i
                ? "bg-dc-blue text-white border-dc-blue"
                : "bg-dc-surface text-dc-muted border-dc-border hover:border-dc-blue hover:text-dc-text"
            )}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
}
