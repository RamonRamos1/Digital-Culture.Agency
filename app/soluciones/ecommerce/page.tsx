import ProblemSection from "@/components/soluciones/shared/ProblemSection";
import Benefits from "@/components/soluciones/shared/benefits";
import Process from "@/components/soluciones/shared/Process";
import FinalCTA from "@/components/soluciones/shared/FinalCTA";


export const metadata = {
  title: "Ecommerce y Datos | Digital Culture",
  description:
    "Optimizamos tiendas online mediante análisis de datos, métricas y estrategias comerciales."
};


export default function EcommercePage() {

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

        <div
          className="
            mx-auto
            max-w-5xl
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
            Ecommerce y Datos
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

            Vendés online,
            pero no siempre sabés qué está pasando.

          </h1>


          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              text-dc-muted
            "
          >

            Analizamos información comercial para detectar
            oportunidades y mejorar ventas y rentabilidad.

          </p>


        </div>

      </section>



      <ProblemSection

        title="Tomás decisiones sin información clara"

        description="Los datos existen, pero muchas empresas no cuentan con sistemas para interpretarlos y tomar mejores decisiones."

        problems={[
          "No saber qué productos tienen mayor demanda",
          "Falta de análisis de competencia",
          "Métricas sin seguimiento",
          "Publicidad sin medición correcta"
        ]}

      />


      <Benefits />

      <Process />

      <FinalCTA />


    </main>

  );

}