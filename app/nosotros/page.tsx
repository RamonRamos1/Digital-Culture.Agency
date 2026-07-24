import { Eye, Target, HeartHandshake, Layers } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTAFinal from "@/components/CTAFinal";

export const metadata = {
  title: "Sobre Nosotros | Digital Culture",
  description:
    "Digital Culture integra estrategia, marketing, diseño, desarrollo y automatización para ayudar a empresas a evolucionar.",
};

const VALUES = [
  {
    title: "Innovación",
    desc: "Buscamos nuevas formas de resolver desafíos empresariales utilizando tecnología, creatividad y estrategia.",
  },
  {
    title: "Compromiso",
    desc: "Trabajamos cada proyecto como un socio estratégico, acompañando al cliente durante todo el proceso.",
  },
  {
    title: "Transparencia",
    desc: "Creemos en la comunicación clara, objetivos definidos y procesos visibles para construir relaciones duraderas.",
  },
  {
    title: "Adaptabilidad",
    desc: "Creamos soluciones flexibles que pueden evolucionar junto con las necesidades de cada negocio.",
  },
];

const METHOD_STEPS = [
  {
    n: 1,
    title: "Diagnóstico",
    desc: "Analizamos el negocio, sus procesos y objetivos para comprender el verdadero desafío.",
  },
  {
    n: 2,
    title: "Estrategia",
    desc: "Definimos una hoja de ruta personalizada con prioridades, alcance y tecnología adecuada.",
  },
  {
    n: 3,
    title: "Ejecución",
    desc: "Desarrollamos la solución con comunicación constante y entregas parciales para validar avances.",
  },
  {
    n: 4,
    title: "Optimización",
    desc: "Medimos resultados y ajustamos la solución para acompañar el crecimiento del negocio.",
  },
];

const TECH_CATEGORIES = [
  {
    title: "Desarrollo Web",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
  },
  {
    title: "Sistemas & Datos",
    items: [
      "Node.js",
      "Django",
      "PostgreSQL",
      "MongoDB",
      "AWS",
    ],
  },
  {
    title: "Integraciones",
    items: [
      "WhatsApp API",
      "Mercado Libre",
      "Google Analytics",
      "Automatizaciones",
      "CRM",
    ],
  },
];

const TEAM = [
  {
    initials: "MC",
    role: "Estrategia Comercial",
    title: "Maximiliano Iasuozzi",
    desc:
      "Conecta objetivos comerciales con estrategias digitales para potenciar ventas y crecimiento.",
  },
  {
    initials: "RR",
    role: "Desarrollo y Arquitectura Digital",
    title: "Ramón Ramos",
    desc:
      "Lidera la planificación técnica y desarrollo de soluciones digitales personalizadas.",
  },
  {
    initials: "MN",
    role: "Marketing y Diseño",
    title: "Margarita Novichkova",
    desc:
      "Desarrolla estrategias de comunicación, identidad de marca y generación de oportunidades.",
  },
  {
    initials: "VA",
    role: "Ciencia de Datos",
    title: "Valentín Albornoz",
    desc:
      "Implementa soluciones basadas en datos, automatización y análisis de información.",
  },
];


export default function NosotrosPage() {
  return (
    <>

      <PageHero
        eyebrow="Sobre Nosotros"
        title={
          <>
            Somos una agencia de Software y consultoría de Marketing
          </>
        }
        description="Integramos estrategia, marketing, diseño, tecnología y automatización para crear soluciones digitales que acompañan el crecimiento real de las empresas."
      />


      {/* QUIENES SOMOS */}
      <section className="bg-dc-dark px-6 md:px-12 py-20 md:py-24">

        <div className="section-eyebrow">
          Quiénes Somos
        </div>

        <h2 className="section-title">
          Apoyamos tu proyecto
          <br />
          sea en la etapa que esté
        </h2>


        <div className="max-w-4xl mt-10 space-y-5 text-dc-muted text-[16px] leading-relaxed">

          <p>
            Desde una idea inicial hasta la implementación de un proyecto concreto y serio, giando las pautas a seguir para incrementar ventas, retener clientes o mejorar procesos productivos o administrativos.
          </p>

          <p>
            Contános sobre tu empresa, nos interesa conoces y hablar con emprendedores como vos, sabemos que buscan crecer y por eso te queremos ayudar.
          </p>

          <p>
            Contratos físicos, clásulas y propuesta de trabajo sin letra chica, fácil de interpretar y todo transparente para la seguridad de ambos.
          </p>

        </div>

      </section>



      {/* MISION VISION */}
      <section className="bg-dc-black px-6 md:px-12 py-20 md:py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


          <div className="bg-dc-surface border border-dc-border rounded-2xl p-10">

            <div className="w-12 h-12 rounded-xl bg-dc-blue/10 flex items-center justify-center mb-6">
              <Target size={24} className="text-dc-blue" />
            </div>

            <h3 className="font-display text-2xl font-bold mb-4">
              Nuestra Misión
            </h3>

            <p className="text-dc-muted leading-relaxed">
              Ayudar a empresas a evolucionar mediante soluciones digitales
              personalizadas que mejoren sus procesos, potencien sus ventas
              y permitan aprovechar las oportunidades que brinda la tecnología.
            </p>

          </div>



          <div className="bg-dc-surface border border-dc-border rounded-2xl p-10">

            <div className="w-12 h-12 rounded-xl bg-dc-blue/10 flex items-center justify-center mb-6">
              <Eye size={24} className="text-dc-blue" />
            </div>

            <h3 className="font-display text-2xl font-bold mb-4">
              Nuestra Visión
            </h3>

            <p className="text-dc-muted leading-relaxed">
              Ser un referente en la industria del Marketing y Software. Creemos que tenemos el potencial para serlo y vamos camino a ello, con total transparencia y dando los resultados que nuestros clientes se merecen.
            </p>

          </div>


        </div>

      </section>



      {/* VALORES */}
      <section className="bg-dc-dark px-6 md:px-12 py-20 md:py-24">


        <div className="section-eyebrow">
          Nuestros Valores
        </div>


        <h2 className="section-title">
          Los principios que guían
          <br />
          nuestra forma de trabajar
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

          {VALUES.map((value)=>(
            <div
              key={value.title}
              className="
              bg-dc-surface
              border
              border-dc-border
              rounded-xl
              p-7
              "
            >

              <h3 className="font-display text-xl font-bold mb-3">
                {value.title}
              </h3>

              <p className="text-dc-muted leading-relaxed">
                {value.desc}
              </p>

            </div>
          ))}

        </div>


      </section>




      {/* COMO LO LOGRAMOS */}
      <section className="bg-dc-black px-6 md:px-12 py-20 md:py-24">


        <div className="text-center">

          <div className="section-eyebrow justify-center flex">
            Cómo lo logramos
          </div>

          <h2 className="section-title">
            Un proceso ordenado
            <br />
            para resultados reales
          </h2>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">

          {METHOD_STEPS.map((step)=>(
            <div
              key={step.n}
              className="text-center"
            >

              <div className="
              w-14
              h-14
              rounded-full
              bg-dc-surface
              border
              border-dc-border
              flex
              items-center
              justify-center
              mx-auto
              mb-5
              text-dc-cyan
              font-bold
              ">
                {step.n}
              </div>


              <h3 className="font-display font-semibold mb-3">
                {step.title}
              </h3>


              <p className="text-sm text-dc-muted leading-relaxed">
                {step.desc}
              </p>


            </div>
          ))}

        </div>


      </section>




      {/* EQUIPO */}
      <section className="bg-dc-dark px-6 md:px-12 py-20 md:py-24">


        <div className="section-eyebrow">
          Equipo
        </div>

        <h2 className="section-title">
          Las personas detrás
          <br />
          de cada proyecto
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">

          {TEAM.map((member)=>(
            <div
              key={member.title}
              className="
              bg-dc-surface
              border
              border-dc-border
              rounded-xl
              p-6
              "
            >

              <div className="
              w-20
              h-20
              rounded-full
              bg-dc-dark
              border
              border-dc-border
              flex
              items-center
              justify-center
              text-dc-cyan
              font-bold
              mb-5
              ">
                {member.initials}
              </div>


              <h3 className="font-display font-bold">
                {member.title}
              </h3>

              <div className="text-xs text-dc-cyan mt-2 mb-3 uppercase">
                {member.role}
              </div>

              <p className="text-sm text-dc-muted leading-relaxed">
                {member.desc}
              </p>


            </div>
          ))}

        </div>


      </section>




      {/* TECNOLOGIA */}
      <section className="bg-dc-black px-6 md:px-12 py-20 md:py-24">

        <div className="section-eyebrow">
          Tecnología
        </div>

        <h2 className="section-title">
          Herramientas que utilizamos
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

          {TECH_CATEGORIES.map((cat)=>(
            <div
              key={cat.title}
              className="
              bg-dc-surface
              border
              border-dc-border
              rounded-xl
              p-7
              "
            >

              <h3 className="text-dc-cyan font-semibold mb-5">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2">

                {cat.items.map((item)=>(
                  <span
                    key={item}
                    className="
                    text-xs
                    border
                    border-dc-border
                    rounded-md
                    px-3
                    py-1.5
                    text-dc-muted
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </section>



      <CTAFinal
        title={
          <>
            Construyamos juntos
            <br />
            el futuro digital de tu empresa
          </>
        }
        description="Contanos tu desafío y analicemos cómo podemos ayudarte a transformarlo en una solución digital."
        primaryLabel="Contactarnos"
        primaryHref="/contacto"
        secondaryLabel="Ver Casos de Éxito"
        secondaryHref="/casos-de-exito"
      />


    </>
  );
}