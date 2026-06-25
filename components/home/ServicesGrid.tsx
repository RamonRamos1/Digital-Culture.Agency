import Link from "next/link";

const SERVICES = [
  {
    num: "01",
    title: "Marketing Digital",
    desc: "Campañas en Meta Ads y Google Ads, estrategia digital integral y gestión de comunidades con foco en resultados medibles.",
    tags: ["Meta Ads", "Google Ads", "Community"],
  },
  {
    num: "02",
    title: "Branding & Identidad",
    desc: "Logo, manual de marca, identidad visual corporativa y diseño de materiales que transmiten autoridad y consistencia.",
    tags: ["Logo", "Manual de Marca", "Diseño"],
  },
  {
    num: "03",
    title: "Desarrollo Web",
    desc: "Landing pages, sitios corporativos y ecommerce de alto rendimiento con diseño premium y experiencia de usuario superior.",
    tags: ["Landing Page", "Ecommerce", "Next.js"],
  },
  {
    num: "04",
    title: "Sistemas a Medida",
    desc: "CRM, ERP, dashboards y sistemas internos completamente personalizados. Del relevamiento al despliegue en producción.",
    tags: ["CRM", "ERP", "Dashboards"],
  },
  {
    num: "05",
    title: "Automatizaciones e IA",
    desc: "Flujos automáticos en WhatsApp, integraciones entre sistemas y procesos de IA aplicada que eliminan el trabajo manual.",
    tags: ["WhatsApp", "Integraciones", "IA"],
  },
  {
    num: "06",
    title: "Apps Móviles",
    desc: "Aplicaciones nativas y multiplataforma para Android, iOS y desktop. Del diseño de UX al lanzamiento en tiendas.",
    tags: ["Android", "iOS", "Flutter"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-dc-black px-6 md:px-12 py-24 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end mb-14">
        <div>
          <div className="section-eyebrow">Nuestros Servicios</div>
          <h2 className="section-title">
            Todo lo que tu negocio necesita,
            <br />
            en un solo lugar
          </h2>
        </div>
        <div>
          <p className="text-dc-muted text-[17px] leading-relaxed max-w-lg">
            No somos una agencia. Somos un ecosistema tecnológico que cubre
            cada etapa del crecimiento digital de tu empresa.
          </p>
          <Link href="/servicios" className="btn-primary mt-7">
            Ver todos los servicios
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dc-blue border border-dc-blue rounded-xl overflow-hidden">
        {SERVICES.map((s) => (
          <div
            key={s.num}
            className="bg-dc-surface p-10 transition-colors hover:bg-dc-card"
          >
            <div className="font-display text-xs font-semibold text-dc-blue tracking-[2px] mb-6">
              {s.num}
            </div>
            <h3 className="font-display text-xl font-bold tracking-tight mb-3">
              {s.title}
            </h3>
            <p className="text-sm text-dc-muted leading-relaxed">{s.desc}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {s.tags.map((t) => (
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
      </div>
    </section>
  );
}
