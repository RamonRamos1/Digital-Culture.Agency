"use client";

import { useState } from "react";

import {
  Clock,
  BarChart3,
  Target,
  TrendingUp
} from "lucide-react";


const BENEFITS = [
  {
    icon: Clock,

    title:
      "Más eficiencia operativa",

    description:
      "Reducimos tareas manuales y procesos repetitivos para que puedas dedicar más tiempo a las decisiones importantes de tu negocio."
  },

  {
    icon: BarChart3,

    title:
      "Decisiones basadas en datos",

    description:
      "Transformamos información dispersa en métricas claras para entender qué funciona, qué mejorar y dónde invertir."
  },

  {
    icon: Target,

    title:
      "Soluciones adaptadas a tu negocio",

    description:
      "Analizamos tu situación actual y construimos herramientas, estrategias y sistemas alineados a tus objetivos."
  },

  {
    icon: TrendingUp,

    title:
      "Crecimiento sostenible",

    description:
      "Buscamos mejorar ventas, procesos y rentabilidad con soluciones pensadas para acompañar la evolución de tu empresa."
  }
];


export default function Benefits() {


  const [activeCard, setActiveCard] = useState<number | null>(null);



  return (

    <section
      className="
        px-6
        md:px-12
        py-20
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
        "
      >


        <div
          className="
            max-w-3xl
            mb-12
          "
        >

          <p
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-dc-blue
            "
          >
            Beneficios
          </p>


          <h2
            className="
              mt-4
              font-display
              text-3xl
              font-bold
              leading-tight
              md:text-5xl
            "
          >

            Más que herramientas.
            Soluciones que generan impacto.

          </h2>


          <p
            className="
              mt-5
              text-lg
              leading-relaxed
              text-dc-muted
            "
          >

            Nuestro objetivo no es incorporar tecnología
            por incorporar tecnología. Es encontrar
            oportunidades reales para mejorar la forma
            en que funciona tu negocio.

          </p>


        </div>



        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-4
          "
        >


          {
            BENEFITS.map((benefit, index) => {

              const Icon = benefit.icon;

              const isActive = activeCard === index;


              return (

                <article
                  key={benefit.title}
                  onClick={() =>
                    setActiveCard(
                      isActive ? null : index
                    )
                  }
                  className="
                    group
                    relative
                    min-h-[260px]
                    cursor-pointer
                    rounded-3xl
                    border
                    border-dc-border
                    bg-dc-card
                    p-6
                    transition
                    duration-500
                    md:cursor-default
                  "
                >


                  <div
                    className={`
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "opacity-0 translate-y-4 md:opacity-100 md:translate-y-0"
                          : "opacity-100"
                      }
                    `}
                  >


                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-dc-blue/10
                        text-dc-blue
                      "
                    >

                      <Icon size={24}/>

                    </div>



                    <h3
                      className="
                        mt-6
                        font-display
                        text-xl
                        font-bold
                      "
                    >

                      {benefit.title}

                    </h3>



                    <p
                      className="
                        mt-3
                        hidden
                        text-sm
                        leading-relaxed
                        text-dc-muted
                        md:block
                      "
                    >

                      {benefit.description}

                    </p>



                    <p
                      className="
                        mt-6
                        text-xs
                        text-dc-blue
                        md:hidden
                      "
                    >

                      Tocar para conocer más

                    </p>


                  </div>



                  <div
                    className={`
                      absolute
                      inset-0
                      flex
                      items-center
                      rounded-3xl
                      p-6
                      transition-all
                      duration-500
                      md:hidden
                      ${
                        isActive
                          ? "opacity-100"
                          : "pointer-events-none opacity-0"
                      }
                    `}
                  >

                    <p
                      className="
                        text-base
                        leading-relaxed
                        text-dc-text
                      "
                    >

                      {benefit.description}

                    </p>


                  </div>


                </article>

              );

            })

          }


        </div>


      </div>


    </section>

  );

}