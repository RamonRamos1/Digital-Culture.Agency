import {
  TrendingUp,
  Monitor,
  Search,
  Network,
  Users,
  ShoppingCart,
  LucideIcon,
} from "lucide-react";

export interface SolutionCard {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
}

export interface ProblemSolution {
  id: string;
  numLabel: string;
  question: string;
  problemDesc: string;
  solutions: SolutionCard[];
  resultText: React.ReactNode;
  isDiscovery?: boolean;
  themeOrange?: boolean;
}

export const PROBLEM_SOLUTIONS: ProblemSolution[] = [
  {
    id: "clientes",
    numLabel: "PROBLEMA 01",
    question: "Quiero conseguir más clientes",
    problemDesc:
      "Tu negocio depende del boca a boca o de leads que no convierten. Necesitás un sistema de adquisición predecible, no suerte.",
    solutions: [
      {
        icon: TrendingUp,
        title: "Marketing Digital",
        desc: "Campañas en Meta Ads y Google Ads diseñadas para captar demanda real, no solo alcance. Estrategia y community management incluidos.",
        tags: ["Meta Ads", "Google Ads", "Estrategia Digital"],
      },
      {
        icon: Monitor,
        title: "Landing Page de conversión",
        desc: "Una página enfocada en una sola acción: que el visitante te contacte. Sin distracciones, con mensaje claro.",
        tags: ["Diseño premium", "Mobile first"],
      },
    ],
    resultText: (
      <>
        Resultado típico: <strong className="text-dc-cyan">flujo constante de leads calificados</strong>, en lugar de depender solo de referidos.
      </>
    ),
  },
  {
    id: "presencia-digital",
    numLabel: "PROBLEMA 02",
    question: "Necesito presencia digital",
    problemDesc:
      "Sin web ni identidad visual profesional, tus clientes potenciales eligen a la competencia antes de conocerte.",
    solutions: [
      {
        icon: Users,
        title: "Branding e identidad visual",
        desc: "Logo, manual de marca y diseño corporativo consistente en todos tus puntos de contacto.",
        tags: ["Logo", "Manual de marca"],
      },
      {
        icon: Monitor,
        title: "Sitio web corporativo",
        desc: "Un sitio que transmite autoridad y profesionalismo, construido con tecnología moderna y diseño premium.",
        tags: ["Next.js", "Mobile first"],
      },
    ],
    resultText: (
      <>
        Resultado típico: <strong className="text-dc-cyan">primera impresión profesional</strong> que genera confianza antes del primer contacto.
      </>
    ),
  },
  {
    id: "automatizar",
    numLabel: "PROBLEMA 03",
    question: "Quiero automatizar procesos",
    problemDesc:
      "Tu equipo pierde horas en tareas repetitivas: copiar datos, responder lo mismo, armar reportes a mano. Eso se puede eliminar.",
    solutions: [
      {
        icon: Network,
        title: "Automatización de WhatsApp",
        desc: "Bots de atención, confirmaciones de turnos y ventas que responden solos, sin que tu equipo intervenga.",
        tags: ["Bots", "Confirmaciones automáticas"],
      },
      {
        icon: Network,
        title: "Integraciones entre sistemas",
        desc: "Conectamos las herramientas que ya usás para que la información fluya sola, sin copiar y pegar.",
        tags: ["APIs", "Flujos automáticos", "IA aplicada"],
      },
    ],
    resultText: (
      <>
        Resultado típico: <strong className="text-dc-cyan">horas semanales liberadas</strong> para que tu equipo se enfoque en lo que realmente importa.
      </>
    ),
  },
  {
    id: "sistema-interno",
    numLabel: "PROBLEMA 04",
    question: "Necesito un sistema interno",
    problemDesc:
      "Excel, planillas sueltas y WhatsApp ya no alcanzan para gestionar tu operación. Necesitás un sistema que escale con vos.",
    solutions: [
      {
        icon: Users,
        title: "CRM a medida",
        desc: "Gestión de clientes, pipeline de ventas y seguimiento automático, diseñado para tu flujo específico.",
        tags: ["Pipeline de ventas", "Reportes"],
      },
      {
        icon: Network,
        title: "ERP / Dashboards",
        desc: "Gestión integral de inventario, facturación y visualización de datos en tiempo real para decidir mejor.",
        tags: ["Inventario", "Facturación", "Dashboards"],
      },
    ],
    resultText: (
      <>
        Este tipo de proyecto requiere una <strong className="text-dc-cyan">reunión de descubrimiento</strong> antes de definir alcance y presupuesto.
      </>
    ),
    isDiscovery: true,
  },
  {
    id: "mercadolibre",
    numLabel: "PROBLEMA 05",
    question: "Quiero vender más en Mercado Libre",
    problemDesc:
      "Competís por precio y tu margen se reduce cada mes. Necesitás posicionamiento estratégico, no solo bajar precios.",
    solutions: [
      {
        icon: Search,
        title: "Auditoría de cuenta",
        desc: "Analizamos tus publicaciones, reputación y métricas actuales para identificar qué está frenando tus ventas.",
        tags: ["Auditoría completa", "Diagnóstico"],
      },
      {
        icon: ShoppingCart,
        title: "Investigación de mercado y competencia",
        desc: "Benchmarking de precios, demanda y oportunidades de categoría que tus competidores no están viendo.",
        tags: ["Análisis de precios", "Benchmarking"],
      },
      {
        icon: TrendingUp,
        title: "Mercado Ads + Optimización SEO",
        desc: "Posicionamiento orgánico y pago combinados para aparecer antes que tu competencia en cada búsqueda relevante.",
        tags: ["Mercado Ads", "SEO interno"],
      },
      {
        icon: Network,
        title: "Somos Importadores",
        desc: "Podemos buscarte proveedores directos de fábrica, distribuidora oficial o podemos ser directamente tu proveedor importando directo de China o cualquier parte del mundo.",
        tags: ["Proveedores", "Importadores Directos"],
      },
    ],
    resultText: (
      <>
        Resultado típico: <strong className="text-dc-orange">mayor visibilidad y conversión</strong> sin depender únicamente de bajar el precio.
      </>
    ),
    themeOrange: true,
  },
  ];
