"use client";

import { useState } from "react";

import {
  Search,
  Lightbulb,
  Code2,
  TrendingUp
} from "lucide-react";


const PROCESS_STEPS = [
  {
    number: "01",

    icon: Search,

    title:
      "Diagnóstico",

    description:
      "Comenzamos entendiendo tu negocio, tus objetivos y los obstáculos que están limitando tu crecimiento. Analizamos procesos, clientes y oportunidades de mejora."
  },

  {
    number: "02",

    icon: Lightbulb,

    title:
      "Estrategia",

    description:
      "Diseñamos un plan personalizado combinando tecnología, marketing y análisis según las necesidades reales de tu empresa."
  },

  {
    number: "03",

    icon: Code2,

    title:
      "Implementación",

    description:
      "Desarrollamos e integramos las soluciones necesarias: sistemas, automatizaciones, campañas, identidad visual o mejoras operativas."
  },

  {
    number: "04",

    icon: TrendingUp,

    title:
      "Optimización",

    description:
      "Medimos resultados, analizamos datos y realizamos ajustes continuos para mejorar rendimiento, eficiencia y rentabilidad."
  }
];


export default function Process() {


  const [activeStep, setActiveStep] = useState<number | null>(null);



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
            Nuestro proceso
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

            No empezamos con una herramienta.
            Empezamos entendiendo tu negocio.

          </h2>



          <p
            className="
              mt-5
              text-lg
              leading-relaxed
              text-dc-muted
            "
          >

            Cada empresa tiene desafíos diferentes.
            Primero analizamos tu situación actual,
            después diseñamos la solución adecuada
            para alcanzar tus objetivos.

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
            PROCESS_STEPS.map((step, index) => {

              const Icon = step.icon;

              const isActive = activeStep === index;



              return (

                <article
                  key={step.number}
                  onClick={() =>
                    setActiveStep(
                      isActive ? null : index
                    )
                  }
                  className="
                    relative
                    min-h-[260px]
                    cursor-pointer
                    overflow-hidden
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


                  <span
                    className="
                      absolute
                      right-5
                      top-4
                      font-display
                      text-6xl
                      font-bold
                      text-white/5
                    "
                  >
                    {step.number}
                  </span>




                  <div
                    className={`
                      relative
                      z-10
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

                      {step.title}

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

                      {step.description}

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

                    <div>

                      <p
                        className="
                          mb-3
                          text-sm
                          uppercase
                          tracking-wider
                          text-dc-blue
                        "
                      >

                        Etapa {step.number}

                      </p>


                      <p
                        className="
                          text-base
                          leading-relaxed
                          text-dc-text
                        "
                      >

                        {step.description}

                      </p>


                    </div>


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