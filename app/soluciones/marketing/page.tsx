import ProblemSection from "@/components/soluciones/shared/ProblemSection";
import Benefits from "@/components/soluciones/shared/benefits";
import Process from "@/components/soluciones/shared/Process";
import FinalCTA from "@/components/soluciones/shared/FinalCTA";


export const metadata = {
  title: "Marketing y Crecimiento | Digital Culture",
  description:
    "Creamos estrategias digitales para atraer clientes y mejorar la rentabilidad."
};


export default function MarketingPage() {

  return (

    <main>


      <section
        className="
          px-6
          md:px-12
          pt-32
          pb-16
        "
      >

        <div className="mx-auto max-w-5xl">


          <p className="text-sm uppercase tracking-[0.25em] text-dc-blue">
            Marketing y Crecimiento
          </p>


          <h1
            className="
              mt-6
              font-display
              text-4xl
              font-bold
              md:text-6xl
            "
          >

            Más clientes.
            Más ventas.
            Mejor rentabilidad.

          </h1>


          <p className="mt-6 max-w-3xl text-lg text-dc-muted">

            Diseñamos estrategias digitales enfocadas
            en crecimiento real del negocio.

          </p>


        </div>


      </section>



      <ProblemSection

        title="Necesitás más clientes, pero con una estrategia clara"

        description="La publicidad sin planificación puede generar gastos sin resultados. Analizamos el negocio antes de invertir."

        problems={[
          "Campañas sin objetivos definidos",
          "Falta de medición de resultados",
          "Bajo volumen de consultas",
          "Ventas sin estrategia comercial"
        ]}

      />


      <Benefits />

      <Process />

      <FinalCTA />


    </main>

  );

}