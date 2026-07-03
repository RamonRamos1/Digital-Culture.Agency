import { Eye, Layers } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTAFinal from "@/components/CTAFinal";

export const metadata = {
  title: "Sobre Nosotros | Digital Culture",
  description:
    "Digital Culture es un ecosistema de transformación digital formado por especialistas en marketing, diseño, desarrollo y automatización.",
};

const WHO_STATS = [
  { num: "12", label: "Proyectos Completados" },
  { num: "4", label: "Áreas de expertise" },
  { num: "+5", label: "Años en el mercado" },
  { num: "100%", label: "Proyectos a medida" },
];

const METHOD_STEPS = [
  { n: 1, title: "Diagnóstico", desc: "Entendemos tu negocio, tu mercado y el problema real antes de proponer nada." },
  { n: 2, title: "Estrategia", desc: "Diseñamos una hoja de ruta con objetivos, alcance y tecnología definidos." },
  { n: 3, title: "Ejecución", desc: "Desarrollo ágil con entregas parciales y comunicación constante con vos." },
  { n: 4, title: "Optimización", desc: "Medimos resultados reales y ajustamos para que el proyecto siga escalando." },
];

const TECH_CATEGORIES = [
  { title: "Frontend", items: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"] },
  { title: "Backend & Apps", items: ["Node.js", "Django", "PostgreSQL", "MongoDB", "AWS"] },
  { title: "Integraciones", items: ["WhatsApp API", "Nubimetrics", "MELI", "Google Analytics", "Google Tag Manager"] },
];

const TEAM = [
  { initials: "Dirección de Comercialización", role: "Dirección De Ventas", title: "Maximiliano Iasuozzi", desc: "Asegura que la visión y el marketing del negocio de forma Online esté sintonizada con los procesos de venta Presencial" },
  { initials: "Desarrollador/Programador", role: "Arquitectura de Sistemas Informáticos", title: "Ramón Ramos", desc: "Supervisión del proyecto desde la propuetsa inciia, las presentaciones parciales, hasta la entrega final del proyecto asegurando el cumplimiento de plazos y calidad pactada." },
  { initials: "Marketing y Diseño", role: "Directora del Área de Marketing y Diseño", title: "Margarita Novichkova", desc: "Generación de nuevos clientes potenciales (leads) y refuerzo de identidad de marca para fomentar la retención" },
  { initials: "Desarrollador Ciencia de Datos", role: "Programador Back-End", title: "Valentín Albornoz", desc: "Desarrolla soluciones de análisis de datos y automatización de procesos." },
];

const WORK_PROCESS = [
  { n: "01", title: "Primer contacto", desc: "Nos escribís por WhatsApp, formulario o agendás una llamada. Obtendrás tu respuesta en 24 a 48horas con un diagnóstico inicial. Danos toda la info de una, porque sino es al reverendo pedo todo" },
  { n: "02", title: "Reunión de descubrimiento", desc: "Seguramente que no tenes ni idea de lo que necesitas, pero como nosotros menos, vamos a finjir demencia todos y seguimos pa delante viejo nomassss" },
  { n: "03", title: "Propuesta Personalizada", desc: "En base a todo lo hablado y escuchando tus problemas (como si fueramos tus pinches psicologos) te proponemos una solución a medida (a medida de nuestros bolsillos, meintras mas debamos, mas caro es)." },
  { n: "04", title: "Entregas Parciales", desc: "Te proporcionamos un código de seguimiento para veas los avances reales, no solo un informe al final del proceso. Esto no fue idea mia y lo tengo que hacer igual pa un cliente. Esfuerzo = 100%. Reutilización = 200%" },
  { n: "05", title: "Lanzamiento y acompañamiento", desc: "Lanzamos en producción, sale todo mal, debuggeamos, sigue mal y así seguimos hasta que algun dia pueda centrar un div sin la ayuda de chat-gpt (que cada dia se pone más choto, como yo)." },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre Nosotros"
        title={
          <>
            No somos una agencia.
            <br />
            Somos un{" "}
            <span className="bg-gradient-to-br from-dc-blue to-dc-cyan bg-clip-text text-transparent">
              ecosistema
            </span>
            .
          </>
        }
        description="Ayudamos a negocios que necesitan vender más y dejar de gastar horas en tareas manuales. Marketing, diseño, tecnología y automatización trabajando juntos para resultados reales."
      />

      {/* QUIENES SOMOS */}
      <section className="bg-dc-dark px-6 md:px-12 py-24 md:py-28">
        <div className="section-eyebrow">Quiénes Somos</div>
        <h2 className="section-title">
          Un equipo multidisciplinario
          <br />
          con una sola obsesión
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-16 mt-12 items-start">
          <div className="flex flex-col gap-5 text-dc-muted text-[16px] leading-relaxed">
            <p>
              Digital Culture es un equipo que combina marketing, diseño,
              desarrollo y automatización para que tu negocio deje de depender
              de suposiciones y trabajo manual.
            </p>
            <p>
              No tercerizamos partes del proyecto a equipos desconectados.
              Cada área trabaja junta desde el principio, para que el resultado
              funcione en ventas, operación y experiencia al mismo tiempo.
            </p>
            <p>
              Nos focalizamos en pymes y comercios que necesitan vender más,
              reducir la carga de tareas repetitivas y tener un sistema digital
              que realmente responda a su negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-dc-border border border-dc-border rounded-xl overflow-hidden">
            {WHO_STATS.map((s) => (
              <div key={s.label} className="bg-dc-surface p-8">
                <div className="font-display text-[38px] font-bold tracking-tight text-dc-cyan">
                  {s.num}
                </div>
                <div className="text-[13px] text-dc-muted mt-1.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-dc-black px-6 md:px-12 py-24 md:py-28">
        <div className="section-eyebrow">Nuestra Visión</div>
        <h2 className="section-title">Hacia dónde vamos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dc-border border border-dc-border rounded-2xl overflow-hidden mt-14">
          <div className="bg-dc-surface p-11">
            <div className="w-[52px] h-[52px] rounded-xl bg-dc-blue/10 border border-dc-blue/20 flex items-center justify-center mb-7">
              <Eye size={24} className="text-dc-blue" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-[22px] font-bold tracking-tight mb-4">
              Visión
            </h3>
            <p className="text-dc-muted text-[15px] leading-[1.75]">
              Ser el socio digital que ayuda a empresas a vender más y a dejar
              de perder tiempo en procesos manuales. Queremos que las PYMES
              puedan digitalizar su operación sin multiplicar proveedores ni
              perder el control de su negocio.
            </p>
          </div>
          <div className="bg-dc-surface p-11">
            <div className="w-[52px] h-[52px] rounded-xl bg-dc-blue/10 border border-dc-blue/20 flex items-center justify-center mb-7">
              <Layers size={24} className="text-dc-blue" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-[22px] font-bold tracking-tight mb-4">
              Cómo lo logramos
            </h3>
            <p className="text-dc-muted text-[15px] leading-[1.75]">
              Lo logramos integrando estrategia, marca, sistemas y
              automatizaciones en un solo proyecto. No entregamos piezas sueltas: construimos soluciones que ayudan a vender más y a liberar tiempo en tu operación.
            </p>
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="bg-dc-dark px-6 md:px-12 py-24 md:py-28">
        <div className="text-center">
          <div className="section-eyebrow justify-center flex">
            Metodología
          </div>
          <h2 className="section-title max-w-lg mx-auto">
            Cómo trabajamos
            <br />
            cada proyecto
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 relative">
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-dc-border" />
          {METHOD_STEPS.map((s) => (
            <div key={s.n} className="text-center px-4 relative z-10 group">
              <div className="w-14 h-14 rounded-full bg-dc-surface border-2 border-dc-border flex items-center justify-center mx-auto mb-6 font-display text-lg font-bold text-dc-blue transition-colors group-hover:border-dc-blue group-hover:bg-dc-blue/10">
                {s.n}
              </div>
              <h4 className="font-display text-base font-semibold mb-2.5">
                {s.title}
              </h4>
              <p className="text-[13px] text-dc-muted leading-relaxed max-w-[220px] mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECNOLOGIA */}
      <section className="bg-dc-black px-6 md:px-12 py-24 md:py-28">
        <div className="section-eyebrow">Tecnología Utilizada</div>
        <h2 className="section-title">
          El stack detrás
          <br />
          de cada proyecto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dc-border border border-dc-border rounded-xl overflow-hidden mt-14">
          {TECH_CATEGORIES.map((cat) => (
            <div key={cat.title} className="bg-dc-surface p-9">
              <h4 className="font-display text-[13px] text-dc-cyan tracking-wide uppercase font-semibold mb-5">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-[13px] text-dc-text bg-white/[0.04] border border-dc-border rounded-md px-3.5 py-1.5 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPO */}
      <section className="bg-dc-dark px-6 md:px-12 py-24 md:py-28">
        <div className="section-eyebrow">Equipo</div>
        <h2 className="section-title">
          Las personas detrás
          <br />
          de cada proyecto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mt-14">
          {TEAM.map((member) => (
            <div
              key={member.initials}
              className="bg-dc-surface border border-dc-border rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:border-dc-blue/30"
            >
              <div className="relative h-40 bg-gradient-to-br from-dc-card to-dc-blue/[0.08] flex items-center justify-center border-b border-dc-border">
                <div className="absolute top-5">
                  <div className="w-24 h-24 rounded-full bg-dc-dark border border-dc-border overflow-hidden flex items-center justify-center">
                    <span className="text-dc-cyan font-display font-bold text-lg">
                      {member.initials}
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-16 p-5">
                <h4 className="font-display text-[15px] font-semibold mb-1 tracking-tight">
                  {member.title}
                </h4>
                <div className="text-[11px] text-dc-cyan font-semibold tracking-wide uppercase mb-2.5">
                  {member.role}
                </div>
                <p className="text-[13px] text-dc-muted leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO DE TRABAJO */}
      <section className="bg-dc-black px-6 md:px-12 py-24 md:py-28">
        <div className="section-eyebrow">Proceso de Trabajo</div>
        <h2 className="section-title">
          De la primera llamada
          <br />
          al proyecto en producción
        </h2>

        <div className="mt-14 border-t border-dc-border">
          {WORK_PROCESS.map((step) => (
            <div
              key={step.n}
              className="grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_1.4fr] gap-4 md:gap-8 py-9 border-b border-dc-border items-start group"
            >
              <div className="font-display text-2xl md:text-[32px] font-bold text-dc-border tracking-tight transition-colors group-hover:text-dc-blue">
                {step.n}
              </div>
              <h4 className="font-display text-[19px] font-semibold tracking-tight md:self-center">
                {step.title}
              </h4>
              <p className="text-sm text-dc-muted leading-relaxed col-span-2 md:col-span-1">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTAFinal
        title={
          <>
            ¿Conversamos sobre
            <br />
            tu proyecto?
          </>
        }
        description="Contanos en qué etapa está tu negocio y te decimos exactamente cómo podemos ayudarte a escalar."
        secondaryLabel="Ver Casos de Éxito"
        secondaryHref="/casos-de-exito"
      />
    </>
  );
}
