import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function FinalCTA() {

  return (

    <section
      id="contacto"
      className="
        px-6
        md:px-12
        py-20
      "
    >

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-3xl
          border
          border-dc-border
          bg-dc-card
          p-8
          md:p-14
        "
      >

        <div
          className="
            absolute
            -right-20
            -top-20
            h-64
            w-64
            rounded-full
            bg-dc-blue/10
            blur-3xl
          "
        />



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
            Empecemos tu transformación digital
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

            Tu próximo crecimiento empieza
            con una mejor estrategia.

          </h2>



          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-dc-muted
            "
          >

            Contanos qué desafíos tiene hoy tu negocio.
            Analizamos tu situación actual y definimos
            un camino claro para mejorar procesos,
            atraer clientes y aumentar tu rentabilidad.

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
              href="/soluciones"
              className="
                btn-secondary
              "
            >

              Ver todas las soluciones

            </Link>


          </div>


        </div>


      </div>


    </section>

  );

}