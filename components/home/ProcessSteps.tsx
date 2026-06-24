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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 relative">
        <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-dc-border" />
        {STEPS.map((s) => (
          <div key={s.n} className="text-center px-4 relative z-10 group">
            <div className="w-14 h-14 rounded-full bg-dc-surface border-2 border-dc-border flex items-center justify-center mx-auto mb-6 font-display text-lg font-bold text-dc-blue transition-colors group-hover:border-dc-blue group-hover:bg-dc-blue/10">
              {s.n}
            </div>
            <h4 className="font-display text-base font-semibold mb-2">
              {s.title}
            </h4>
            <p className="text-[13px] text-dc-muted leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
