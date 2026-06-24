import { Search, TrendingUp, ShoppingCart } from "lucide-react";

const FEATURES = [
  {
    icon: Search,
    title: "Auditoría de cuenta",
    desc: "Detectamos cuellos de botella en tus publicaciones y reputación.",
  },
  {
    icon: TrendingUp,
    title: "Mercado Ads + SEO",
    desc: "Posicionamiento orgánico y pago para aparecer antes que la competencia.",
  },
  {
    icon: ShoppingCart,
    title: "Investigación de mercado",
    desc: "Análisis de competidores, precios y oportunidades de categoría.",
  },
];

const METRICS = [
  { label: "Visitas mensuales", value: "+38%", width: "72%" },
  { label: "Tasa de conversión", value: "+21%", width: "55%" },
  { label: "Costo por venta", value: "−42%", width: "30%" },
  { label: "Ventas netas", value: "+127%", width: "85%" },
];

export default function MercadoLibreSection() {
  return (
    <section className="bg-dc-black px-6 md:px-12 py-24 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-dc-orange/[0.08] border border-dc-orange/20 rounded-full px-4 py-1.5 text-xs font-semibold text-dc-orange tracking-wide uppercase mb-6">
          Mercado Libre
        </div>
        <h2 className="section-title">
          Escalá tus ventas
          <br />
          en Mercado Libre
        </h2>
        <p className="text-dc-muted text-[17px] leading-relaxed mt-4 max-w-lg">
          No alcanza con publicar. La diferencia entre vender y escalar está
          en la estrategia de posicionamiento, competencia y publicidad.
        </p>

        <div className="flex flex-col gap-4 mt-10">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 p-5 rounded-lg bg-dc-surface border border-dc-border"
            >
              <div className="w-9 h-9 rounded-md bg-dc-orange/10 border border-dc-orange/15 flex items-center justify-center flex-shrink-0">
                <f.icon size={18} className="text-dc-orange" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-display text-[15px] font-semibold mb-1">
                  {f.title}
                </h4>
                <p className="text-[13px] text-dc-muted leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dc-surface border border-dc-border rounded-xl overflow-hidden">
        <div className="bg-dc-orange/5 border-b border-dc-orange/10 px-6 py-4 flex items-center gap-2.5 font-display text-[13px] font-semibold text-dc-orange">
          Dashboard de Rendimiento
        </div>
        <div className="p-6">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="flex justify-between items-center py-3.5 border-b border-dc-border last:border-b-0"
            >
              <div>
                <div className="text-[13px] text-dc-muted">{m.label}</div>
                <div className="h-1 rounded-full bg-dc-border mt-1.5 w-[180px]">
                  <div
                    className="h-1 rounded-full bg-gradient-to-r from-dc-orange to-yellow-400"
                    style={{ width: m.width }}
                  />
                </div>
              </div>
              <div className="font-display text-base font-bold text-emerald-400">
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
