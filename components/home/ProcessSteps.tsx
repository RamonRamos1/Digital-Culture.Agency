"use client";

import { useEffect, useState } from "react";

const STEPS = [
  {
    n: 1,
    title: "Descubrimiento",
    desc: "Auditoría del negocio, objetivos y análisis de la competencia para diseñar la estrategia.",
  },
  {
    n: 2,
    title: "Planificación",
    desc: "Hoja de ruta, arquitectura de solución y definición de KPIs antes de escribir una línea de código.",
  },
  {
    n: 3,
    title: "Ejecución",
    desc: "Desarrollo ágil con revisiones continuas. Vos estás en el proceso, no al final.",
  },
  {
    n: 4,
    title: "Escalamiento",
    desc: "Una vez entregado, optimizamos, medimos y escalamos lo que funciona.",
  },
];

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-dc-dark px-6 md:px-12 py-24 md:py-28">
      <div className="text-center">
        <div className="section-eyebrow justify-center flex">
          Nuestra Metodología
        </div>
        <h2 className="section-title max-w-md mx-auto">
          Cómo transformamos
          <br />
          tu negocio
        </h2>
      </div>

      <div className="relative mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-dc-border md:block" />
        {STEPS.map((s, index) => {
          const isActive = index === activeStep;

          return (
            <div
              key={s.n}
              className={`group relative z-10 px-4 text-center transition-all duration-500 ease-out ${
                isActive
                  ? "scale-[1.03] opacity-100"
                  : "opacity-60 saturate-50"
              }`}
            >
              <div
                className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 font-display text-lg font-bold text-dc-blue transition-all duration-500 ease-out ${
                  isActive
                    ? "border-dc-blue bg-dc-blue/15 shadow-[0_0_0_4px_rgba(55,113,255,0.16)]"
                    : "border-dc-border bg-dc-surface"
                }`}
              >
                {s.n}
              </div>
              <h4 className="mb-2 font-display text-base font-semibold">
                {s.title}
              </h4>
              <p className="text-[13px] leading-relaxed text-dc-muted">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
