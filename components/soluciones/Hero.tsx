"use client";

import { motion } from "framer-motion";


export default function Hero() {

  return (

    <section
      className="
        relative
        overflow-hidden
        px-6
        md:px-12
        pt-32
        md:pt-40
        pb-16
        md:pb-20
      "
    >

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-grid-pattern
          opacity-30
        "
      />


      <div
        className="
          mx-auto
          max-w-5xl
        "
      >

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
          className="
            text-sm
            uppercase
            tracking-[0.25em]
            text-dc-blue
          "
        >
          Soluciones digitales
        </motion.p>



        <motion.h1
          initial={{
            opacity: 0,
            y: 25
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.1
          }}
          className="
            mt-6
            max-w-4xl
            font-display
            text-4xl
            font-bold
            leading-tight
            md:text-6xl
          "
        >

          Problemas reales.
          <br />

          <span
            className="
              text-dc-blue
            "
          >
            Soluciones digitales
          </span>

          <br />

          para hacer crecer tu negocio.

        </motion.h1>




        <motion.p
          initial={{
            opacity: 0,
            y: 25
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="
            mt-6
            max-w-3xl
            text-lg
            leading-relaxed
            text-dc-muted
            md:text-xl
          "
        >

          No vendemos herramientas aisladas.
          Analizamos tu negocio, detectamos oportunidades
          y construimos sistemas de tecnología,
          marketing y estrategia adaptados a tus objetivos.

        </motion.p>




        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
          className="
            mt-10
            flex
            flex-wrap
            gap-4
          "
        >

          <a
            href="#soluciones"
            className="
              btn-primary
            "
          >
            Conocer soluciones
          </a>


          <a
            href="#contacto"
            className="
              btn-secondary
            "
          >
            Analizar mi negocio
          </a>


        </motion.div>


      </div>


    </section>

  );
}