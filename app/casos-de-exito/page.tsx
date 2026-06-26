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
    title: "CRM personalizado para Estudio Jurídico",
    problem: "Estudio con problemas de seguimiento de clientes y oportunidades, generando pérdida de casos y baja tasa de cierre de ventas.",
    solution: "Desarrollamos un CRM a medida que centraliza la información de clientes, automatiza recordatorios y permite un seguimiento eficiente de oportunidades.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
    resultNum: "+75%",
    resultTxt: "Incremento en tasa de cierre de oportunidades y mejora en la gestión de clientes",
    categories: ["Soluciones/Automatizaciones"],
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
    categories: ["Auditorías", "Mercado Ads"],
  },
  {
    badge: "AUTO",
    type: "Automatizaciones",
    title: "Bot de atención y ventas por WhatsApp",
    problem: "Clínica médica con turnos gestionados manualmente por una sola persona, generando errores de agenda y demoras en la confirmación.",
    solution: "Automatizamos confirmaciones, recordatorios, reprogramación y cobros, todo sin intervención humana directa.",
    tech: ["WhatsApp API", "Node.js", "Integraciones"],
    resultNum: "80%",
    resultTxt: "Reducción en tiempo administrativo mensual",
    categories: ["Soluciones/Automatizaciones"],
  },
  {
    badge: "WEB",
    type: "Desarrollo Web",
    title: "Sitio corporativo para Empresa Constructora",
    problem: "Empresa con presencia digital limitada, sin un sitio web que refleje su portfolio y capacidades, afectando la captación de clientes.",
    solution: "Diseñamos y desarrollamos un sitio web moderno, responsivo y optimizado para SEO, mostrando proyectos, servicios y testimonios de clientes.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    resultNum: "+90%",
    resultTxt: "Aumento en consultas de clientes potenciales a través del sitio web y mayor respaldo de profesionalismo",
    categories: ["Web/App"],
  },
  {
    badge: "BR",
    type: "Branding",
    title: "Diseño de manual de marca para empresa de Asesoría financiera",
    problem: "Empresa con identidad visual inconsistente y sin manual de marca, dificultando la comunicación y percepción profesional ante clientes.",
    solution: "Creamos una identidad visual completa, incluyendo logotipo, paleta de colores, tipografía y manual de marca, asegurando coherencia en todos los puntos de contacto.",
    tech: ["Branding", "Manual de Marca", "Diseño Corporativo"],
    resultNum: "5",
    resultTxt: "Locales con identidad de marca unificada",
    categories: ["Branding"],
  },
  {
    badge: "Costos, Margenes y Facturación",
    type: "Sistema a Medida",
    title: "Calculadora de Márgenes",
    problem: "Distribuidora con problemas para calcular márgenes de venta en Mercado Libre, considerando comisiones, envíos, promociones y costos internos, generando incertidumbre en la rentabilidad.",
    solution: "Desarrollamos una calculadora personalizada que integra todos los factores de costos y márgenes, permitiendo a la distribuidora tomar decisiones informadas sobre precios y promociones.",
    tech: ["Node.js", "React","PostgreSQL", "Framer Motion"],
    resultNum: "70%",
    resultTxt: "Reducción en errores de cálculo y mejora en la rentabilidad de ventas",
    categories: ["Soluciones/Automatizaciones", "Auditorías"],
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
