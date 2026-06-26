"use client";

import { useState } from "react";

const DESCRIPTION_WORD_LIMIT = 30;

const CASES = [
  {
    badge: "Volta Energía",
    type: "Sistema a Medida",
    title: "CRM personalizado para obras de energía",
    desc: "La empresa tenía un problema de recibir multiples llamados a lo largo de la semana de clientes consultando por qué etapa iba su obra. La solución fue realizarle un dashboard en el que pueda colocar todos sus clientes e ir agregando obras en estado Realizado, Pendiente y En Curso. A partir de eso se genera un codigo de seguimiento para cada cliente que la empresa se lo da y cada uno de ellos puede ver en tiempo real en qué estado se encuentra su obra.",
  },
  {
    badge: "Blue Dragon",
    type: "Empresa de Módulos Mobiliarios",
    title: "Web Corporativa para Presentación de Empresa y Servicios",
    desc: "Es una empresa dedicada a la importación de Módulos, los cuáles pueden ser utilizados para vivienda, oficina o departamentos. Realizan toda la logística, instalación de servicios y todo lo necesario para dejártelo 100% Funcionando.",
  },
  {
    badge: "Distribuidora Omega",
    type: "Calculadora de Márgenes",
    title: "Mercado Libre",
    desc: "Una distribuidora dedicada a la venta de productos varios mediante la plataforma de Mercado Libre, tenía un inconveniente con el cálculo de sus ganancias. Entre comisiones por venta fijo, porcentual, envíos, colecta y almacenamiento FULL, promociones, publicidad y los impuestos a pagar nunca podían saber bien cuánto realmente pagaban. Esta calculadora les pudo resolver el problema contemplando todos estos parámetros y algunos más propios o internos de la empresa.",
  },
];

function getPreviewText(text: string, limit: number) {
  const words = text.split(/\s+/).filter(Boolean);
  return words.length <= limit ? text : `${words.slice(0, limit).join(" ")}...`;
}

export default function CasesGrid() {
  const [expandedCases, setExpandedCases] = useState<Record<number, boolean>>({});

  const toggleExpanded = (index: number) => {
    setExpandedCases((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="bg-dc-dark px-6 md:px-12 py-24 md:py-28">
      <div className="section-eyebrow">Casos de Éxito</div>
      <h2 className="section-title">
        Resultados reales,
        <br />
        no promesas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {CASES.map((c, index) => {
          const isExpanded = expandedCases[index] ?? false;
          const words = c.desc.split(/\s+/).filter(Boolean);
          const shouldTruncate = words.length > DESCRIPTION_WORD_LIMIT;
          const displayedText = isExpanded
            ? c.desc
            : getPreviewText(c.desc, DESCRIPTION_WORD_LIMIT);

          return (
            <div
              key={c.title}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-dc-border bg-dc-surface transition-all hover:-translate-y-1 hover:border-dc-blue/30"
            >
              <div className="h-40 bg-gradient-to-br from-dc-card to-dc-blue/5 flex items-center justify-center border-b border-dc-border font-display text-4xl font-bold tracking-tighter text-white/[0.07]">
                {c.badge}
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="text-[11px] text-dc-cyan tracking-wide uppercase font-semibold mb-2.5">
                  {c.type}
                </div>
                <h3 className="font-display text-lg font-bold mb-2.5 tracking-tight">
                  {c.title}
                </h3>
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm text-dc-muted leading-relaxed flex-1">{displayedText}</p>
                  {shouldTruncate && (
                    <button
                      type="button"
                      onClick={() => toggleExpanded(index)}
                      className="shrink-0 text-sm font-semibold text-dc-cyan hover:text-white transition"
                    >
                      {isExpanded ? "ver menos" : "ver más"}
                    </button>
                  )}
                </div>
                <div className="mt-auto pt-5">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-dc-cyan px-4 py-2 text-sm font-semibold text-dc-dark transition hover:bg-white/90"
                  >
                    ver proyecto
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
