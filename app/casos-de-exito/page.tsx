import PageHero from "@/components/PageHero";
import CTAFinal from "@/components/CTAFinal";
import CaseCards from "@/components/casos-de-exito/CaseCards";

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

      <CaseCards cases={CASES} />

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
