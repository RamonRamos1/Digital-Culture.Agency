import PageHero from "@/components/PageHero";
import CTAFinal from "@/components/CTAFinal";

export const metadata = {
  title: "Casos de Éxito | Digital Culture",
  description:
    "Resultados reales de empresas que digitalizaron, automatizaron y escalaron su negocio con Digital Culture.",
};

const CASES = [
  {
    badge: "CRM",
    type: "Sistema a Medida",
    title: "CRM personalizado para distribuidora",
    problem: "Empresa con 40 vendedores sin ningún sistema de seguimiento de clientes. Las oportunidades se perdían en planillas sueltas y chats de WhatsApp sin trazabilidad.",
    solution: "Implementamos un CRM a medida con pipeline visual de ventas, reportes automáticos por equipo y alertas de seguimiento integradas a WhatsApp.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "WhatsApp API"],
    resultNum: "+65%",
    resultTxt: "Aumento en tasa de cierre de ventas en 90 días",
  },
  {
    badge: "ML",
    type: "Mercado Libre",
    title: "Escalamiento de cuenta en Mercado Libre",
    problem: "Negocio de electrónica con ventas estancadas, compitiendo únicamente por precio frente a decenas de vendedores similares.",
    solution: "Rediseño completo de publicaciones, investigación de competencia, estrategia de Mercado Ads y optimización SEO dentro de la categoría.",
    tech: ["Mercado Ads", "SEO", "Auditoría de cuenta"],
    resultNum: "3.2x",
    resultTxt: "Crecimiento en facturación mensual en 6 meses",
  },
  {
    badge: "AUTO",
    type: "Automatizaciones",
    title: "Bot de atención y ventas por WhatsApp",
    problem: "Clínica médica con turnos gestionados manualmente por una sola persona, generando errores de agenda y demoras en la confirmación.",
    solution: "Automatizamos confirmaciones, recordatorios, reprogramación y cobros, todo sin intervención humana directa.",
    tech: ["WhatsApp API", "Node.js", "Integraciones"],
    resultNum: "−80%",
    resultTxt: "Reducción en tiempo administrativo mensual",
  },
  {
    badge: "WEB",
    type: "Desarrollo Web",
    title: "Sitio corporativo para estudio de arquitectura",
    problem: "Estudio con portfolio disperso entre Instagram y PDFs, sin un sitio que transmitiera la calidad real de sus proyectos.",
    solution: "Sitio corporativo con portfolio visual de alto impacto, formulario de contacto cualificado y optimización de velocidad de carga.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    resultNum: "+90%",
    resultTxt: "Incremento en consultas calificadas vía web",
  },
  {
    badge: "BR",
    type: "Branding",
    title: "Rediseño de marca para cadena de cafeterías",
    problem: "Marca con identidad inconsistente entre locales: distintos logos, colores y materiales según el punto de venta.",
    solution: "Identidad visual unificada, manual de marca y diseño de papelería aplicado a los 5 locales de la cadena.",
    tech: ["Branding", "Manual de Marca", "Diseño Corporativo"],
    resultNum: "5",
    resultTxt: "Locales con identidad de marca unificada",
  },
  {
    badge: "ERP",
    type: "Sistema a Medida",
    title: "ERP para distribuidora de insumos industriales",
    problem: "Gestión de inventario y facturación dividida entre tres sistemas distintos que no se comunicaban entre sí.",
    solution: "ERP a medida que unificó inventario, facturación y reportes en tiempo real, eliminando la doble carga de datos.",
    tech: ["Node.js", "PostgreSQL", "Dashboards"],
    resultNum: "−70%",
    resultTxt: "Reducción en errores de inventario",
  },
];

export default function CasosDeExitoPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos de Éxito"
        title={
          <>
            Resultados reales,
            <br />
            no promesas
          </>
        }
        description="Cada proyecto incluye el problema real, la solución aplicada, la tecnología utilizada y el resultado medible obtenido."
      />

      <section className="px-6 md:px-12 pb-24 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <div
              key={c.title}
              className="bg-dc-surface border border-dc-border rounded-xl overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:border-dc-blue/30"
            >
              <div className="h-36 bg-gradient-to-br from-dc-card to-dc-blue/5 flex items-center justify-center border-b border-dc-border font-display text-4xl font-bold tracking-tighter text-white/[0.07]">
                {c.badge}
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="text-[11px] text-dc-cyan tracking-wide uppercase font-semibold mb-2.5">
                  {c.type}
                </div>
                <h3 className="font-display text-lg font-bold mb-3 tracking-tight">
                  {c.title}
                </h3>

                <div className="flex flex-col gap-3 text-[13px] text-dc-muted leading-relaxed mb-4">
                  <p>
                    <span className="text-dc-text font-semibold">Problema: </span>
                    {c.problem}
                  </p>
                  <p>
                    <span className="text-dc-text font-semibold">Solución: </span>
                    {c.solution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {c.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-dc-muted bg-white/[0.04] border border-dc-border rounded px-2.5 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto p-3.5 bg-dc-blue/5 border border-dc-blue/10 rounded-md">
                  <div className="font-display text-2xl font-bold text-dc-cyan">
                    {c.resultNum}
                  </div>
                  <div className="text-xs text-dc-muted mt-0.5">
                    {c.resultTxt}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTAFinal
        title={
          <>
            ¿Tu proyecto puede ser
            <br />
            el próximo caso de éxito?
          </>
        }
        description="Contanos tu situación actual y te mostramos exactamente cómo podemos ayudarte a llegar a resultados como estos."
        secondaryLabel="Ir a la Calculadora"
        secondaryHref="/calculadora"
      />
    </>
  );
}
