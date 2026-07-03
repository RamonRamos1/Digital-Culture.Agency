import { CheckCircle2, AlertCircle } from "lucide-react";
import { ProblemSolution } from "@/lib/solutions-data";
import makeWhatsAppLink from "@/lib/whatsapp";
import clsx from "clsx";

export default function ProblemSolutionBlock({
  data,
  index,
}: {
  data: ProblemSolution;
  index: number;
}) {
  const orange = data.themeOrange;
  const visibleSolutions = data.solutions.slice(0, 6);

  const truncate = (s: string, n = 100) =>
    s && s.length > n ? s.slice(0, n - 1) + "…" : s;

  return (
    <div
      id={data.id}
      className={clsx(
        "px-4 sm:px-6 md:px-12 py-12 md:py-24 border-t border-dc-border relative",
        index % 2 === 1 && "bg-dc-dark"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.3fr] gap-12 md:gap-16 items-start">
        <div className="mb-4 md:sticky md:top-24 md:self-start md:z-10">
          <div
            className={clsx(
              "font-display text-[13px] font-semibold tracking-[2px] mb-1",
              orange ? "text-dc-orange" : "text-dc-blue"
            )}
          >
            {data.numLabel}
          </div>

          <h3
            className={clsx(
              "font-display font-bold text-[clamp(18px,2.4vw,28px)] leading-snug mb-2",
              orange ? "text-dc-orange" : "text-dc-blue"
            )}
          >
            {data.question}
          </h3>

          <p className="text-dc-muted text-sm max-w-md">{data.problemDesc}</p>
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

          <div
            className={clsx(
              "grid grid-cols-1 sm:grid-cols-2 gap-4",
              data.solutions.length >= 4
                ? "lg:grid-cols-4"
                : data.solutions.length === 3
                ? "lg:grid-cols-3"
                : "lg:grid-cols-2"
            )}
          >
            {visibleSolutions.map((sol) => (
              <div
                key={sol.title}
                className={clsx(
                    "bg-dc-surface border border-dc-border rounded-xl p-4 sm:p-5 transition-colors flex flex-col justify-between h-full",
                    orange ? "hover:border-dc-orange/35" : "hover:border-dc-blue/35"
                  )}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-2">
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
                    <h4 className="font-display text-sm font-semibold tracking-tight">
                      {sol.title}
                    </h4>
                  </div>

                  <p className="text-sm text-dc-muted leading-relaxed mb-3">
                    {truncate(sol.desc, 90)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
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

                <a
                  href={makeWhatsAppLink(
                    `Me podrían enviar más información sobre ${sol.title}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "mt-2 inline-flex w-full sm:w-auto items-center justify-center px-3 py-2 rounded-md text-sm font-semibold",
                    orange
                      ? "bg-dc-orange text-white hover:opacity-95"
                      : "bg-dc-blue text-white hover:opacity-95"
                  )}
                >
                  Contratar servicio
                </a>
              </div>
            ))}
          </div>

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
