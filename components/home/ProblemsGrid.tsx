import {
  Users,
  Monitor,
  Network,
  ShoppingCart,
  Sparkles,
  GitBranch,
} from "lucide-react";

const PROBLEMS = [
  {
    icon: Users,
    title: "No conseguís clientes nuevos",
    desc: "Tu negocio depende del boca a boca o leads de baja calidad. Sin prresencia ni estrategia digital, estás dejando dinero sobre la mesa.",
    tag: "Marketing Digital",
  },
  {
    icon: Sparkles,
    title: "Tu marca no transmite profesionalismo",
    desc: "Un logo genérico no genera confianza. La identidad visual es la primera percepción que tienen de vos.",
    tag: "Branding",
  },
  {
    icon: Network,
    title: "Tus procesos son manuales",
    desc: "Tiempo valioso en tareas repetitivas. Las automatizaciones y sistemas a medida pueden liberar a tu equipo.",
    tag: "Automatizaciones y Sistemas a Medida",
  },
  {
    icon: ShoppingCart,
    title: "Vendés en Mercado Libre sin estrategia",
    desc: "Competir por precio no es sostenible. Existen herramientas para posicionarte y escalar tus ventas.",
    tag: "Mercado Libre",
  },
];

export default function ProblemsGrid() {
  return (
    <section className="bg-dc-dark px-6 md:px-12 py-24 md:py-28">
      <div className="section-eyebrow">Problemas que resolvemos</div>
      <h2 className="section-title">
        ¿Te identificás con alguna
        <br />
        de estas situaciones?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px mt-14 border-2 border-dc-border rounded-xl overflow-hidden">
        {PROBLEMS.map((p) => (
          <div
            key={p.title}
            className="p-9 bg-dc-surface border-r border-b border-dc-border transition-colors hover:bg-dc-card"
          >
            <div className="w-11 h-11 rounded-lg bg-dc-blue/10 border border-dc-blue/20 flex items-center justify-center mb-5">
              <p.icon size={22} className="text-dc-blue" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2.5 tracking-tight">
              {p.title}
            </h3>
            <p className="text-sm text-dc-muted leading-relaxed">{p.desc}</p>
            <span className="inline-block bg-dc-blue/10 text-dc-cyan text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded mt-4">
              → {p.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
