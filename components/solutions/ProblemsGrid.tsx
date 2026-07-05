"use client";

import { PROBLEM_SOLUTIONS } from "@/lib/solutions-data";
import makeWhatsAppLink from "@/lib/whatsapp";
import clsx from "clsx";

export default function ProblemsGrid() {
  const problems = PROBLEM_SOLUTIONS.slice(0, 5);

  const truncate = (s: string, n = 120) =>
    s && s.length > n ? s.slice(0, n - 1) + "…" : s;

  return (
    <div className="px-6 md:px-12 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((p) => {
          const Icon = p.solutions[0]?.icon;
          const orange = p.themeOrange;
          return (
            <div
              key={p.id}
              className={clsx(
                  "bg-dc-surface border border-dc-border rounded-xl p-6 flex flex-col justify-between h-full",
                  p.id === 'mercadolibre' && 'sm:col-span-2 md:col-span-2 lg:col-span-2',
                  orange ? "hover:border-dc-orange/35" : "hover:border-dc-blue/35"
                )}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={clsx(
                      "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                      orange ? "bg-dc-orange/10" : "bg-dc-blue/10"
                    )}
                  >
                    {Icon && (
                      <Icon
                        size={18}
                        className={orange ? "text-dc-orange" : "text-dc-blue"}
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                  <div>
                    <div
                      className={clsx(
                        "text-[11px] font-semibold tracking-[1px]",
                        orange ? "text-dc-orange" : "text-dc-cyan"
                      )}
                    >
                      {p.numLabel}
                    </div>
                    <h3 className="font-display font-bold text-base leading-snug">
                      {p.question}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-dc-muted mb-4">{truncate(p.problemDesc, 100)}</p>
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={makeWhatsAppLink(`Quiero más información sobre ${p.question}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-semibold",
                    orange ? "bg-dc-orange text-white" : "bg-dc-blue text-white"
                  )}
                >
                  Contratar servicio
                </a>

                <a
                  href={`/soluciones/${p.id}`}
                  className="text-sm text-dc-muted hover:text-dc-text"
                >
                  Ver landing
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
