const STATS = [
  { num: "Proyectos = 8 ", suffix: "", label: "viste, somos re honestos" },
  { num: "Webs = 3", suffix: "", label: "contando la nuestra, te gusta :)?" },
  { num: "5", suffix: "+ años", label: "En el mercado. Sí, hemos vendido menos que el almacén de la esquina" },
];

export default function HeroStats() {
  return (
    <div className="flex gap-8 md:gap-12 flex-wrap pt-10 border-t border-dc-border">
      {STATS.map((s) => (
        <div key={s.label}>
          <div className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            {s.num}
            <span className="text-dc-blue">{s.suffix}</span>
          </div>
          <div className="text-[13px] text-dc-muted mt-0.5">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
