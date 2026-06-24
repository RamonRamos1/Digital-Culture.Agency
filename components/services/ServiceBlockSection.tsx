import { Check, ArrowRight, AlertCircle } from "lucide-react";
import { ServiceBlock } from "@/lib/services-data";
import clsx from "clsx";

export default function ServiceBlockSection({
  service,
  index,
}: {
  service: ServiceBlock;
  index: number;
}) {
  const orange = service.themeOrange;

  return (
    <div
      id={service.id}
      className={clsx(
        "px-6 md:px-12 py-20 md:py-24 border-t border-dc-border",
        index % 2 === 1 && "bg-dc-dark"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16 mb-12">
        <div>
          <div
            className={clsx(
              "w-16 h-16 rounded-2xl flex items-center justify-center mb-7 border",
              orange
                ? "bg-dc-orange/10 border-dc-orange/20"
                : "bg-dc-blue/10 border-dc-blue/20"
            )}
          >
            <service.icon
              size={30}
              className={orange ? "text-dc-orange" : "text-dc-blue"}
              strokeWidth={1.5}
            />
          </div>
          <div
            className={clsx(
              "font-display text-[13px] font-semibold tracking-[2px] mb-4",
              orange ? "text-dc-orange" : "text-dc-blue"
            )}
          >
            {service.eyebrow}
          </div>
          <h2 className="font-display font-bold text-[clamp(28px,3.5vw,42px)] tracking-tighter leading-tight mb-4">
            {service.title}
          </h2>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-dc-muted leading-relaxed max-w-md">
            {service.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-dc-border border border-dc-border rounded-xl overflow-hidden">
        {service.subServices.map((sub) => (
          <div
            key={sub.name}
            className="bg-dc-surface p-7 transition-colors hover:bg-dc-card"
          >
            <div
              className={clsx(
                "w-7 h-7 rounded-md flex items-center justify-center mb-4",
                orange ? "bg-dc-orange/10" : "bg-dc-cyan/10"
              )}
            >
              <Check
                size={14}
                className={orange ? "text-dc-orange" : "text-dc-cyan"}
                strokeWidth={3}
              />
            </div>
            <h4 className="font-display text-[15px] font-semibold mb-2 tracking-tight">
              {sub.name}
            </h4>
            <p className="text-[13px] text-dc-muted leading-relaxed">
              {sub.desc}
            </p>
          </div>
        ))}
      </div>

      {service.discoveryNote && (
        <div className="mt-8 p-5 bg-dc-blue/[0.06] border border-dc-blue/15 rounded-lg flex items-center gap-3.5">
          <AlertCircle size={20} className="text-dc-cyan flex-shrink-0" />
          <p className="text-[13px] text-dc-muted m-0">
            Los proyectos de sistemas a medida requieren una reunión de
            descubrimiento antes de definir alcance y presupuesto.
          </p>
        </div>
      )}

      <div className="mt-8 flex items-center gap-4">
        <a
          href="#"
          className={clsx(
            "flex items-center gap-2 text-sm font-semibold font-display cursor-pointer transition-all hover:gap-3",
            orange ? "text-dc-orange" : "text-dc-cyan"
          )}
        >
          Ver casos relacionados <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
