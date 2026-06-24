import { CheckCircle2, AlertCircle } from "lucide-react";
import { ProblemSolution } from "@/lib/solutions-data";
import clsx from "clsx";

export default function ProblemSolutionBlock({
  data,
  index,
}: {
  data: ProblemSolution;
  index: number;
}) {
  const orange = data.themeOrange;

  return (
    <div
      id={data.id}
      className={clsx(
        "px-6 md:px-12 py-20 md:py-24 border-t border-dc-border relative",
        index % 2 === 1 && "bg-dc-dark"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.3fr] gap-12 md:gap-16 items-start">
        <div className="md:sticky md:top-28">
          <div
            className={clsx(
              "font-display text-[13px] font-semibold tracking-[2px] mb-5",
              orange ? "text-dc-orange" : "text-dc-blue"
            )}
          >
            {data.numLabel}
          </div>
          <div className="font-display font-bold text-[clamp(24px,3vw,32px)] tracking-tight leading-snug mb-5">
            <span className={orange ? "text-dc-orange" : "text-dc-blue"}>
              &quot;
            </span>
            {data.question}
            <span className={orange ? "text-dc-orange" : "text-dc-blue"}>
              &quot;
            </span>
          </div>
          <p className="text-dc-muted text-[15px] leading-relaxed max-w-sm">
            {data.problemDesc}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div
            className={clsx(
              "text-xs font-semibold tracking-wide uppercase mb-2",
              orange ? "text-dc-orange" : "text-dc-cyan"
            )}
          >
            → Así lo resolvemos
          </div>

          {data.solutions.map((sol) => (
            <div
              key={sol.title}
              className={clsx(
                "bg-dc-surface border border-dc-border rounded-xl p-7 transition-colors",
                orange ? "hover:border-dc-orange/35" : "hover:border-dc-blue/35"
              )}
            >
              <div className="flex items-center gap-3.5 mb-3.5">
                <div
                  className={clsx(
                    "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0",
                    orange ? "bg-dc-orange/10" : "bg-dc-blue/10"
                  )}
                >
                  <sol.icon
                    size={18}
                    className={orange ? "text-dc-orange" : "text-dc-blue"}
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="font-display text-base font-semibold tracking-tight">
                  {sol.title}
                </h4>
              </div>
              <p className="text-sm text-dc-muted leading-relaxed mb-3.5">
                {sol.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {sol.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] text-dc-muted bg-white/[0.04] border border-dc-border rounded px-2.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div
            className={clsx(
              "flex items-center gap-3 mt-3 p-4 rounded-lg border",
              orange
                ? "bg-dc-orange/[0.06] border-dc-orange/15"
                : "bg-dc-cyan/[0.05] border-dc-cyan/15"
            )}
          >
            {data.isDiscovery ? (
              <AlertCircle
                size={18}
                className={orange ? "text-dc-orange" : "text-dc-cyan"}
              />
            ) : (
              <CheckCircle2
                size={18}
                className={orange ? "text-dc-orange" : "text-dc-cyan"}
              />
            )}
            <p className="text-[13px] text-dc-text m-0">{data.resultText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
