"use client";

import { PROBLEM_SOLUTIONS } from "@/lib/solutions-data";

export default function QuickNavPills() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-6 md:px-12 pb-16 flex gap-2.5 flex-wrap">
      {PROBLEM_SOLUTIONS.map((p) => (
        <button
          key={p.id}
          onClick={() => scrollTo(p.id)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-dc-border text-[13px] font-medium text-dc-muted bg-dc-surface transition-all hover:border-dc-blue hover:text-dc-text"
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: p.themeOrange ? "#FFA500" : "#0055FF",
            }}
          />
          {p.question}
        </button>
      ))}
    </div>
  );
}
