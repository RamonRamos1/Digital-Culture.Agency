import {
  TrendingUp,
  Palette,
  Monitor,
  Share2,
  Smartphone,
  ShoppingCart,
  LucideIcon,
} from "lucide-react";

export interface SubService {
  name: string;
  desc: string;
}

export interface ServiceBlock {
  id: string;
  num: string;
  icon: LucideIcon;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  subServices: SubService[];
  themeOrange?: boolean;
  discoveryNote?: boolean;
}

export const SERVICES: ServiceBlock[] = [
  {
    id: "marketing",
    num: "01",
    icon: TrendingUp,
    eyebrow: "01 — MARKETING DIGITAL",
    title: (
      <>
        Conseguí clientes,
        <br />
        no solo visitas
      </>
    ),
    description:
      "Diseñamos estrategias de adquisición que conectan tu marca con las personas correctas, en el momento correcto. No vendemos clics, vendemos resultados medibles en tu negocio.",
    subServices: [
      { name: "Meta Ads", desc: "Campañas en Instagram y Facebook optimizadas por conversión, no por alcance vacío." },
      { name: "Google Ads", desc: "Captación de demanda activa: gente que ya busca lo que vendés, justo cuando lo busca." },
      { name: "Estrategia Digital", desc: "Plan de adquisición integral: canales, mensajes y embudo de conversión definidos." },
    ],
  },
  {
    id: "branding",
    num: "02",
    icon: Palette,
    eyebrow: "02 — BRANDING",
    title: (
      <>
        Una marca que
        <br />
        genera confianza
      </>
    ),
    description:
      "Tu identidad visual es la primera impresión que tiene un cliente potencial. Construimos marcas consistentes, profesionales y memorables, listas para escalar en cualquier canal.",
    subServices: [
      { name: "Logo", desc: "Diseño de marca distintiva, pensada para funcionar en digital y en físico." },
      { name: "Identidad Visual", desc: "Paleta, tipografía y sistema gráfico coherente en todos tus puntos de contacto." },
      { name: "Manual de Marca", desc: "Documento de referencia para que cualquier pieza futura mantenga consistencia." },
    ],
  },
  {
    id: "web",
    num: "03",
    icon: Monitor,
    eyebrow: "03 — DESARROLLO WEB",
    title: (
      <>
        Presencia digital
        <br />
        que convierte
      </>
    ),
    description:
      "Sitios construidos con tecnología moderna, pensados para cargar rápido, verse impecables en cualquier dispositivo y, sobre todo, convertir visitas en clientes.",
    subServices: [
      { name: "Landing Pages", desc: "Páginas de alta conversión enfocadas en una sola acción concreta." },
      { name: "Sitios Corporativos", desc: "Webs institucionales que transmiten autoridad y profesionalismo." },
      { name: "Ecommerce", desc: "Tiendas online completas con pasarela de pagos y gestión de stock." },
    ],
  },
  {
    id: "sistemas",
    num: "04",
    icon: Share2,
    eyebrow: "04 — SISTEMAS A MEDIDA",
    title: (
      <>
        Software que se
        <br />
        adapta a tu operación
      </>
    ),
    description:
      "Ningún negocio funciona igual a otro. Diseñamos CRM, ERP y dashboards construidos desde cero para tu flujo de trabajo específico, sin pagar por funciones que no usás.",
    subServices: [
      { name: "CRM", desc: "Gestión de clientes, pipeline de ventas y seguimiento automatizado." },
      { name: "ERP", desc: "Gestión integral de inventario, facturación y procesos administrativos." },
      { name: "Dashboards", desc: "Visualización de datos en tiempo real para decisiones informadas." },
      { name: "Sistemas internos", desc: "Herramientas a medida para los procesos específicos de tu equipo." },
      { name: "Apps Móviles", desc: "Si tu negocio necesita una app para gestionar clientes o mostrar más profesionalismo. Nose que esperás pa llamarnos" },
      { name: "UN MONTÓN DE COSAS MÁS", desc: "Hasta un álbum digital pal mundial, si tenes parkinson no preocupation las figus se pegan solitas (si es que el pinche div se centra bien)" },
    ],
    discoveryNote: true,
  },
  {
    id: "automatizaciones",
    num: "05",
    icon: Share2,
    eyebrow: "05 — AUTOMATIZACIONES",
    title: (
      <>
        Eliminá el trabajo
        <br />
        manual repetitivo
      </>
    ),
    description:
      "Conectamos tus herramientas para que la información fluya sola. Lo que hoy hace una persona copiando datos entre planillas, puede pasar a ser automático.",
    subServices: [
      { name: "WhatsApp", desc: "Bots de atención, confirmaciones y ventas integrados a tu sistema." },
      { name: "Integraciones", desc: "Conexión entre tus herramientas actuales sin tareas manuales." },
      { name: "Flujos automáticos", desc: "Procesos de negocio que se ejecutan solos ante cada evento." },   
    ],
  },
  {
    id: "apps",
    num: "06",
    icon: Smartphone,
    eyebrow: "06 — APPS",
    title: (
      <>
        Tu negocio,
        <br />
        en el bolsillo del cliente
      </>
    ),
    description:
      "Desarrollamos aplicaciones nativas y multiplataforma pensadas para acompañar a tus usuarios donde sea que estén — móvil, tablet o escritorio.",
    subServices: [
      { name: "Android", desc: "Apps nativas optimizadas para el ecosistema Android." },
      { name: "iOS", desc: "Apps nativas pensadas para la experiencia Apple." },
      { name: "Desktop", desc: "Aplicaciones de escritorio para flujos de trabajo profesionales." },
    ],
  },
  {
    id: "mercadolibre",
    num: "07",
    icon: ShoppingCart,
    eyebrow: "07 — MERCADO LIBRE",
    title: (
      <>
        Vendé más, no
        <br />
        solo más barato
      </>
    ),
    description:
      "Competir solo por precio agota tu margen. Te ayudamos a posicionarte estratégicamente con datos reales de mercado y competencia.",
    subServices: [
      { name: "Auditorías", desc: "Evaluamos tu cuenta, la etapa en la que está tu empresa o emprendimiento y definimos por dónde debemos comenzar" },
      { name: "Investigación de Mercado", desc: "Si el producto no está en demanda, no se vende. Así de simple, evaluamos su cantidad demandad y estacionalidad" },
      { name: "Investigación de Competencia", desc: "Según la evaluación del producto se determina quién es tu competencia, su rendimiento y qué acciones debemos tomar para superarla" },
      { name: "Mercado Ads", desc: "Si la publicación está funcionando en orgánico pasamos a esta fase, con el impulso correcto podés multiplicar tus ganancias" },
      { name: "Optimización SEO", desc: "No vende el producto de mejor calidad, ni el precio más baja, vende la publicación que mejor transmite y entiende a su comprador" },
      { name: "Calculadora de Márgenes", desc: "Hemos desarrollado una web/app que tiene en cuenta múltiples variables tanto de comisiones en la plataforma, logísticas e impuestos" },
    ],
    themeOrange: true,
  },
];
