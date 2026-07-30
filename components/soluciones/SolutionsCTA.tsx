import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function SolutionCTA() {

  return (

    <section
      id="contacto"
      className="
        px-6
        md:px-12
        pb-20
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-3xl
          border
          border-dc-border
          bg-dc-card
          p-8
          md:p-12
        "
      >

        <div
          className="
            relative
            z-10
            max-w-3xl
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
            Empecemos por entender tu negocio
          </p>



          <h2
            className="
              mt-5
              font-display
              text-3xl
              font-bold
              leading-tight
              md:text-5xl
            "
          >

            Tu negocio tiene potencial.
            <br />

            Encontramos qué está frenando su crecimiento.

          </h2>



          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-dc-muted
            "
          >

            Antes de implementar cualquier solución,
            analizamos tu situación actual, detectamos
            oportunidades y diseñamos un camino claro
            para mejorar procesos, ventas y rentabilidad.

          </p>



          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
          >

            <Link
              href="/contacto"
              className="
                btn-primary
                inline-flex
                items-center
                gap-2
              "
            >

              Solicitar diagnóstico

              <ArrowRight size={18}/>

            </Link>



            <Link
              href="/nosotros"
              className="
                btn-secondary
              "
            >

              Conocé nuestro enfoque

            </Link>


          </div>


        </div>


      </div>


    </section>

  );

}