"use client";

import { useState } from "react";

const DESCRIPTION_WORD_LIMIT = 40;

type CaseItem = {
  badge: string;
  type: string;
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  resultNum: string;
  resultTxt: string;
};

function getPreviewText(text: string, limit: number) {
  const words = text.split(/\s+/).filter(Boolean);
  return words.length <= limit ? text : `${words.slice(0, limit).join(" ")}...`;
}

export default function CaseCards({ cases }: { cases: CaseItem[] }) {
  const [expandedCases, setExpandedCases] = useState<Record<number, boolean>>({});

  const toggleExpanded = (index: number) => {
    setExpandedCases((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="px-6 md:px-12 pb-24 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c, index) => {
          const isExpanded = expandedCases[index];
          const problemPreview = isExpanded
            ? c.problem
            : getPreviewText(c.problem, DESCRIPTION_WORD_LIMIT);
          const solutionPreview = isExpanded
            ? c.solution
            : getPreviewText(c.solution, DESCRIPTION_WORD_LIMIT);
          const needsTruncate =
            c.problem.split(/\s+/).filter(Boolean).length > DESCRIPTION_WORD_LIMIT ||
            c.solution.split(/\s+/).filter(Boolean).length > DESCRIPTION_WORD_LIMIT;

          return (
            <div
              key={c.title}
              className="bg-dc-surface border border-dc-border rounded-xl overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:border-dc-blue/30"
            >
              <div className="h-36 bg-gradient-to-br from-dc-card to-dc-blue/5 flex items-center justify-center border-b border-dc-border font-display text-4xl font-bold tracking-tighter text-white/[0.07]">
                {c.badge}
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="text-[11px] text-dc-cyan tracking-wide uppercase font-semibold mb-2.5">
                  {c.type}
                </div>
                <h3 className="font-display text-lg font-bold mb-3 tracking-tight">
                  {c.title}
                </h3>

                <div className="flex flex-col gap-3 text-[13px] text-dc-muted leading-relaxed mb-4">
                  <p>
                    <span className="text-dc-text font-semibold">Problema: </span>
                    {problemPreview}
                  </p>
                  <p>
                    <span className="text-dc-text font-semibold">Solución: </span>
                    {solutionPreview}
                  </p>
                </div>

                {needsTruncate && (
                  <button
                    type="button"
                    onClick={() => toggleExpanded(index)}
                    className="text-sm font-semibold text-dc-cyan hover:text-white transition mb-4"
                  >
                    {isExpanded ? "ver menos" : "ver más"}
                  </button>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {c.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-dc-muted bg-white/[0.04] border border-dc-border rounded px-2.5 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto space-y-3">
                  <div className="p-3.5 bg-dc-blue/5 border border-dc-blue/10 rounded-md">
                    <div className="font-display text-2xl font-bold text-dc-cyan">
                      {c.resultNum}
                    </div>
                    <div className="text-xs text-dc-muted mt-0.5">
                      {c.resultTxt}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="rounded-full border border-dc-border bg-white/5 px-4 py-2 text-sm font-semibold text-dc-text transition hover:border-dc-cyan hover:text-white"
                    >
                      Ver Proyecto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
