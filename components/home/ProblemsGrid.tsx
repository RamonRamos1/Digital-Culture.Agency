import {
  Users,
  Network,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

const PROBLEMS = [
  {
    icon: Users,
    title: "No conseguís clientes nuevos",
    desc: "Tu negocio depende del boca a boca o de leads de baja calidad. Sin presencia ni estrategia digital, estás dejando dinero sobre la mesa.",
    tag: "Marketing Digital",
  },
  {
    icon: Sparkles,
    title: "Tu marca no transmite profesionalismo",
    desc: "Un logo genérico no genera confianza. La identidad visual es la primera percepción que tienen los potenciales clientes de tu empresa.",
    tag: "Branding",
  },
  {
    icon: Network,
    title: "Tus procesos son manuales",
    desc: "Perdés tiempo valioso realizando tareas repetitivas. Las automatizaciones y los sistemas a medida permiten optimizar el trabajo de todo tu equipo.",
    tag: "Automatizaciones y Sistemas a Medida",
  },
  {
    icon: ShoppingCart,
    title: "Vendés en Mercado Libre sin estrategia",
    desc: "Competir únicamente por precio no es sostenible. Existen estrategias y herramientas para posicionarte y aumentar tus ventas.",
    tag: "Mercado Libre",
  },
];

export default function ProblemsGrid() {
  return (
    <section className="bg-dc-dark px-6 md:px-12 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="section-eyebrow">
          Problemas que resolvemos
        </div>

        <h2 className="section-title mt-3">
          ¿Te identificás con alguna
          <br />
          de estas situaciones?
        </h2>

        <div className="max-w-6xl mx-auto mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="
                  flex flex-col
                  h-full
                  rounded-2xl
                  border
                  border-dc-border
                  bg-dc-surface
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-dc-blue/40
                  hover:shadow-xl
                  hover:shadow-dc-blue/10
                "
              >
                <div className="w-14 h-14 rounded-xl bg-dc-blue/10 border border-dc-blue/20 flex items-center justify-center mb-5">
                  <p.icon
                    size={26}
                    className="text-dc-blue"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="font-display text-xl font-bold tracking-tight mb-3">
                  {p.title}
                </h3>

                <p className="text-dc-muted leading-7 flex-grow">
                  {p.desc}
                </p>

                <div className="pt-6">
                  <span className="inline-flex items-center rounded-full bg-dc-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-dc-cyan">
                    {p.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}